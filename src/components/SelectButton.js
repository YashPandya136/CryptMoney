import { makeStyles } from '@material-ui/styles'
import React from 'react'

const SelectButton = ({children, selected, onClick}) => {

const useStyle = makeStyles(
     {
        selectbutton: {
            border: '1px solid gold',
            borderRadius: 8,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: 'Josefin Sans',
            cursor: 'pointer',
            backgroundColor: selected ? 'gold' : '',
            color: selected ? 'black': '',
            fontWeight: selected ? 700 : 500,
            '&:hover' : {
                backgroundColor: 'gold',
                color: 'black',
            },
            width: '22%',
            margin: 5,
        }
        }
);
const classes = useStyle();
  return (
    <span onClick={onClick}
    className={classes.selectbutton}
    >{children}</span>
  )
}

export default SelectButton
