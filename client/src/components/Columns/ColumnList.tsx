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
interface ColumnInterface {

    // id: string;
    columnName:string;
    orderedActions: string[];

}



const ColumnList: React.FC=()=>{
    // const initialColumns:any = {
    //     request: {
    //         columnName: "request",
    //         orderedActions: ["item 1", "item 2", "item 3"]
    //     },
    //     accepted: {
    //         columnName: "accepted",
    //         orderedActions: []
    //     },
    //     finished: {
    //         columnName: "finished",
    //         orderedActions: []
    //     }
    //   };

    //   const [renderData, setRenderData] = React.useState<any>(initialColumns)
    const {loading,data, error}=useQuery(GET_ALL_COLUMNS)
    const [renderData, setRenderData] = React.useState<any[]>([])
   
    
    // const categories = ["request", "accepted", "finished"];

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
    
    
 
    console.log("*******************randered",renderData)

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
   

        // const startColumnData  = renderData.find((col:any):any=>{
        //     return col.columnName === source.droppableId
        //    })||{orderedActions:[]}
        // const endColumnData = renderData.find((col:any):any=>{
        //        return col.columnName === destination.droppableId
        //       })||{orderedActions:[]}
        

        // const startColumnData:any = renderData.find((col:any)=>{
        //     return col.columnName === source.droppableId
        //    }) 
        // const endColumnData:any = renderData.find((col:any)=>{
        //     return col.columnName === destination.droppableId
        //    }) 
        //    console.log(startColumnData,"endColumndata--out-newsEndlist",endColumnData )
       
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
           
          // If start is different from end, we need to update multiple columns
          // Filter the start list like before
          const newStartList:any = startColumnData.orderedActions.filter(
            (_: any, idx: number) => idx !== source.index
          )

        
          // Create a new start column
          const newStartCol = {
            columnName: startColumnData.columnName,
            orderedActions: newStartList
          }
        //   console.log("newStartCol: ",newStartCol,"%%%%%%%%%%%%%%%%%%%%" )
          // Make a new end list array
          const newEndList:any = Object.values(endColumnData.orderedActions)
           
      
        //   console.log(endColumnData,"endColumndata----newsEndlist",newEndList )
          // Insert the item into the end list
          console.log("newEndList: ",typeof(newEndList), "destination.index: ",destination.index,"startColumnData.orderedActions[source.index]:", startColumnData.orderedActions[source.index])
        

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