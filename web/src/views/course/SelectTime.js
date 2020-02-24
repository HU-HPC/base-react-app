import React from "react"
import { Input, Row, Col } from "reactstrap"

function SelectTime() {
 
    return (
        <>
        <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'15px' }} type="select" name="startHour" id="courseStartHour">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
           <option>7</option>
           <option>8</option>
           <option>9</option>
           <option>10</option>
           <option>11</option>
           <option>12</option>
       </Input>
       <p style={{ marginTop: '7px', marginLeft: '4px' }}>
           :
       </p>
       <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'5px' }} type="select" name="startMinutes" id="courseStartMinutes">
           <option>00</option>
           <option>05</option>
           <option>10</option>
           <option>15</option>
           <option>20</option>
           <option>25</option>
           <option>30</option>
           <option>35</option>
           <option>40</option>
           <option>45</option>
           <option>50</option>
           <option>55</option>
       </Input>
       <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'5px' }} type="select" name="startAMPM" id="courseStartAMPM">
           <option>AM</option>
           <option>PM</option>
       </Input>
       </>
    )
}


export default SelectTime