import styled from 'styled-components'

export const StyledMenu = styled.div`
background-color: black;

display: flex;
justify-content: space-evenly;
.dropbtn {
    width: 150px;
    background-color: black;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    transition: all 1s ease;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content button {
    width: 100%;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content button:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
`