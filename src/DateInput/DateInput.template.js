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
}
p{
    position: absolute;
    left: 12px;
    top: -8px;
    right: 50%;
    background: #fff;
    height: 30px;
    pointer-events: none;
    color: #555;
}
div{
    position:relative;
}
</style>

<div>
<input type='date' placeholder="YYYY-MM-DD"/>
<p>YYYY-MM-DD</p>
</div>
`