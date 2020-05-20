import React from 'react'
import PropTypes from 'prop-types';


const ProductTable = (item) => {
    console.log(item)
    return(
        <table style ={{ border:'solid 3px', margin:"10px auto" , borderRadius:'8px',
            textAlign: 'center', borderColor: 'tomato'}}>
            <tr style ={{ color:'green', textDecoration:'underline',
            justifyContent:'center', padding:'15px'}}>
                <th style ={{ padding:'15px'}}>name</th>
                <th style ={{ padding:'15px'}}>category</th>
                <th style ={{ padding:'15px'}}>price</th>
            </tr>
            {
            item.item.map(item=> {return (
                <tr>
                    <td key={item.name}>{item.name}</td>
                    <td key={item.category}>{item.category}</td>
                    <td key={item.price}>{item.price}</td>
                </tr>)}
                )}
        </table>
    )}
    ProductTable.propTypes = {
        item: PropTypes.string
        }
export default ProductTable;
