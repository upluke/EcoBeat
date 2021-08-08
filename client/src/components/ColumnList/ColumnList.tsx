import React, { useState, useEffect } from 'react'
import { GET_ALL_COLUMNS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Column from '../Column/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { cloneDeep } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '3%'
  },
}));



const ColumnList: React.FC<any> = ({ setPoints }) => {

  const { loading: columnLoading, data: columnData } = useQuery(GET_ALL_COLUMNS)
  const { loading: actionLoading, data: actionData } = useQuery(GET_ALL_ACTIONS)
  const [renderData, setRenderData] = useState<any[]>([])

  console.log("data ------>", renderData)

  useEffect(() => {
    const ac = new AbortController();
    if (!columnLoading && columnData && !actionLoading && actionData) {
      let groupedData = getItemsByCategories(columnData.getAllColumns, "columnName");
      console.log("action data,", actionData)
      let actionArr: any[] = []
      for (const el of actionData.getAllActions) {
        actionArr.push(el["id"])
      }
      console.log("groupedData", groupedData)
      let copyOfGroupedData = cloneDeep(groupedData)
      let orderedActionsOfRequest = copyOfGroupedData["request"]["orderedActions"]

      let difference = orderedActionsOfRequest
        .filter((x: any) => !actionArr.includes(x))
        .concat(actionArr.filter((x: any) => !orderedActionsOfRequest.includes(x)));
      Object.values(copyOfGroupedData).map((cog: any) => {
        if (cog.columnName === 'request') {
          cog.orderedActions = [...cog.orderedActions, ...difference]
        }
      })

      setRenderData(copyOfGroupedData)
    }
    return () => ac.abort();
  }, [columnLoading, actionLoading, columnData, actionData])

  useEffect(() => {
    const ac = new AbortController();
    if (renderData && actionData) {
      let copyOfRenderData: any = cloneDeep(renderData)
      let finishedActions = copyOfRenderData["finished"]?.orderedActions // optional chaining
      let ecoArr: any[] = []

      for (const el of actionData?.getAllActions) {
        if (finishedActions?.includes(el.id)) {
          ecoArr.push(el["ecopoints"])
        }
      }
      let sum = ecoArr?.reduce((a, b) => a + b, 0)
      console.log(sum)
      setPoints(sum)
    }
    return () => ac.abort();
  }, [renderData, actionData, setPoints])

  const getItemsByCategories = (objectArray: any, property: any) => {
    return objectArray.reduce((acc: any, obj: any) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = {};
      }
      acc[key] = obj;
      return acc;
    }, {});
  };


  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) { return null }

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) { return null }


    const sd: any = source.droppableId
    const dd: any = destination.droppableId
    const startColumnData = renderData[sd];
    const endColumnData = renderData[dd];

    // If start is the same as end, we're in the same column
    if (startColumnData === endColumnData) {

      //   Move the item within the list
      //   Start by making a new list without the dragged item
      const newList = startColumnData.orderedActions.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Then insert the item at the right location
      newList.splice(destination.index, 0, startColumnData.orderedActions[source.index])

      // Then create a new copy of the column object
      const newCol = {
        columnName: startColumnData.columnName,
        orderedActions: newList
      }

      // Update the state
      setRenderData(state => ({ ...state, [newCol.columnName]: newCol }))
      return null
    } else {

      // If start is different from end, we need to update multiple columns and ilter the start list 
      const newStartList: any = startColumnData.orderedActions.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Create a new start column
      const newStartCol = {
        columnName: startColumnData.columnName,
        orderedActions: newStartList
      }

      const newEndList: any = Object.values(endColumnData.orderedActions)

      // Insert the item into the end list

      newEndList.splice(destination.index, 0, startColumnData.orderedActions[source.index])

      //   Create a new end column
      const newEndCol = {
        columnName: endColumnData.columnName,
        orderedActions: newEndList
      }

      //   Update the state
      setRenderData((state: any) => ({
        ...state,
        [newStartCol.columnName]: newStartCol,
        [newEndCol.columnName]: newEndCol
      }))

    }
  }


  const classes = useStyles();
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Something went wrong!</h1>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={3} justify="center">
        {
          Object.values(renderData).map((col: any, index: any) => {
            return (
              <Grid key={col.columnName} item xs={3} className={classes.root} >
                <Column index={index} key={col.columnName} col={col} />
              </Grid>
            )
          })
        }
      </Grid >
    </DragDropContext >
  )
}

export default ColumnList
