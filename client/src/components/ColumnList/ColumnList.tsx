import React,{useState} from 'react'
import { GET_ALL_COLUMNS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import Column from '../Column/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding:'3rem 18rem',
        gap: '8rem',
        height:'50rem',
        backgroundColor: "#113537",
    },
  }));




// interface ColumnInterface {
//     columnName:string;
//     orderedActions: string[];

// }



const ColumnList: React.FC=()=>{
 
    const {loading,data, error}=useQuery(GET_ALL_COLUMNS)
    const [renderData, setRenderData] = React.useState<any[]>([])
   

    React.useEffect(()=>{
        if(!loading&&data){
          let groupedData = getItemsByCategories(data.getAllColumns, "columnName");
          setRenderData(groupedData)
        }
      },[loading,data])
    

    const getItemsByCategories = (objectArray:any, property:any) => {
        return objectArray.reduce((acc:any, obj:any) => {
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
        if (destination === undefined || destination === null) {return null}
   
        // Make sure we're actually moving the item
        if (
          source.droppableId === destination.droppableId &&
          destination.index === source.index
        )
        {return null}
     
       
        const sd:any=source.droppableId
        const dd:any=destination.droppableId
        const startColumnData= renderData[sd];
        const endColumnData= renderData[dd];
       
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
          const newStartList:any = startColumnData.orderedActions.filter(
            (_: any, idx: number) => idx !== source.index
          )

        
          // Create a new start column
          const newStartCol = {
            columnName: startColumnData.columnName,
            orderedActions: newStartList
          }
       
          const newEndList:any = Object.values(endColumnData.orderedActions)
           
          // Insert the item into the end list

        newEndList.splice(destination.index, 0, startColumnData.orderedActions[source.index])
    
         
          
        //   Create a new end column
          const newEndCol = {
            columnName: endColumnData.columnName,
            orderedActions: newEndList
          }
          console.log("newEndCol: ",newEndCol )
    
        //   Update the state
          setRenderData((state:any)=>({
            ...state,
            [newStartCol.columnName]: newStartCol,
            [newEndCol.columnName]: newEndCol
          }))
           
        }
      }
    

    const classes = useStyles();
    // if (loading) return <h1>Loading...</h1>;
    // if (error) return <h1>Something went wrong!</h1>;
    
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Paper  >
                <List className={classes.root} >
                {
                    Object.values(renderData).map((col:any)=>{
                        return (
                            <Column key={col.columnName} col={col} />
                        )
                    })
                    }
                </List>
            </Paper> 
        </DragDropContext>
    )
}

export default ColumnList