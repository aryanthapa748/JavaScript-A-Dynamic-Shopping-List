<script>
const uList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", ()=>{
    var myItem = input.value;
    input.value = "";
    
const listItems = document.createElement("li");
const span = document.createElement("span");
const btn = document.createElement("button");

listItems.appendChild(span);
span.textContent = myItem;
listItems.appendChild(btn);
btn.textContent = "Delete";
uList.appendChild(listItems);

btn.addEventListener("click", ()=>{
    uList.removeChild(listItems);
});

input.focus();

});
</script>