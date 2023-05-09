export default `<style>
input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 6px 12px;
    line-height: 1.428571429;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    position: relative;
    font-size: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom:10px
}
div {
    position:relative;
}
ul {
    z-index:10;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    list-style: none;
    position: absolute;
    left: 0;
    right: 0;
    background: #f8f7f6;
   
}
ul li {
    padding: 6px;
    margin-block: 5px;
    cursor:pointer;
}
ul li:hover {
   background:#eee;
}
small {
    display: none;
    margin-bottom:10px;
}

</style>
<div>
<input type='text' placeholder="Enter your destination"/>
<small>No location was found</small>

<ul></ul>
</div>
`