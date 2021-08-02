import React,{useState} from 'react'
import { GET_ALL_COLUMNS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import Column from '../Column/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        margin: '24px auto',
        width: '80%',
        height: '68rem',
        gap: '8px',
        backgroundColor: "pink",
    },
  }));



// const onDragEnd = ( ) =>  null
export interface ColumnInterface {

    // id: string;
    columnName:string;
    orderedActions: string[];

}
 

const ColumnList: React.FC=()=>{
    const {loading,data, error}=useQuery(GET_ALL_COLUMNS)
    const [renderData, setRenderData] = React.useState([])
    console.log("data^^^^^^^^^^^",data)
    React.useEffect(()=>{
        if(!loading&&data){
          setRenderData(data.getAllColumns)
        }
      },[loading,data])
    console.log("renderData###############",data,renderData)

    const onDragEnd = ({ source, destination }: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) {return null}
    
        // Make sure we're actually moving the item
        if (
          source.droppableId === destination.droppableId &&
          destination.index === source.index
        )
        {return null}
    
        // Set start and end variables
        // const start =  source.droppableId
        // const end =  destination.droppableId

        // const startColumnData  = renderData.find((col:any):any=>{
        //     return col.columnName === source.droppableId
        //    })||{orderedActions:[]}
        // const endColumnData = renderData.find((col:any):any=>{
        //        return col.columnName === destination.droppableId
        //       })||{orderedActions:[]}

        const startColumnData:any = renderData.find((col:any)=>{
            return col.columnName === source.droppableId
           }) 
        const endColumnData:any = renderData.find((col:any)=>{
            return col.columnName === destination.droppableId
           }) 
        console.log("&&",startColumnData,endColumnData)
        // If start is the same as end, we're in the same column
        if (startColumnData === endColumnData) {
            return null
          // Move the item within the list
          // Start by making a new list without the dragged item
        //   const newList = start.list.filter(
        //     (_: any, idx: number) => idx !== source.index
        //   )
    
        //   // Then insert the item at the right location
        //   newList.splice(destination.index, 0, start.list[source.index])
    
        //   // Then create a new copy of the column object
        //   const newCol = {
        //     id: start.id,
        //     list: newList
        //   }
    
        //   // Update the state
        // //   setColumns(state => ({ ...state, [newCol.id]: newCol }))
        //   return null
        } else {
          // If start is different from end, we need to update multiple columns
          // Filter the start list like before
          const newStartList = startColumnData.orderedActions.filter(
            (_: any, idx: number) => idx !== source.index
          )
          console.log("newstartlist: ",newStartList )
          // Create a new start column
          const newStartCol = {
         
            columnName: startColumnData.columnName,
            orderedActions: newStartList
          }
          console.log("newStartCol: ",newStartCol )
          // Make a new end list array
          const newEndList = endColumnData.orderedActions

          console.log("newsEndlist: ",newEndList )
          // Insert the item into the end list
          console.log("source index: ",source.index)
          newEndList.splice(destination.index, 0, startColumnData.orderedActions[source.index])
    
          // Create a new end column
          const newEndCol = {
            columnName: endColumnData.columnName,
            orderedActions: newEndList
          }
          console.log("newEndCol: ",newEndCol )
    
          //Update the state
        //   setRenderData(state =>({
        //     ...state,
        //     [newStartCol.columnName]: newStartCol,
        //     [newEndCol.columnName]: newEndCol
        //   }))
           
        }
      }
    

    const classes = useStyles();
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Paper  >
                <List className={classes.root} >
                {data&&
                    data.getAllColumns.map((col:any)=>{
                        return (
                            <>
                            <Column {...col} />
                        
                            </>
                        )
                    })
                    }
                </List>
            </Paper> 
        </DragDropContext>
    )
}

export default ColumnList