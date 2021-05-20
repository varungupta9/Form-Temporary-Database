
// create main container
var container = document.createElement('div')
container.setAttribute('class','container-fluid')
var mainRow = document.createElement('div')
mainRow.setAttribute('class','row')

// create from submission 
var formSide = document.createElement('div')
formSide.setAttribute('class','col-4')
var h1Form = document.createElement('h1')
h1Form.innerHTML="Form Submission:"
var form = document.createElement('form')
form.setAttribute('class','form')
var formField1=createForm('div','class','form-group','lable','for','firstname','Firstname:','input','type','text','class','form-control','id','firstname','placeholder','Firstname')
var formField2=createForm('div','class','form-group','lable','for','lastname','Lastname:','input','type','text','class','form-control','id','lastname','placeholder','Lastname')
var formField3=createForm('div','class','form-group','lable','for','address1','Address 1:','input','type','text','class','form-control','id','address1','placeholder','Address 1')
var formField4=createForm('div','class','form-group','lable','for','address2','Address 1:','input','type','text','class','form-control','id','address2','placeholder','Address 2')
var formField5=createForm('div','class','form-group','lable','for','pin','PIN:','input','type','number','class','form-control','id','pin','placeholder','PIN')
var formField9=createForm('div','class','form-group','lable','for','state','State:','input','type','text','class','form-control','id','state','placeholder','State')
var formField10=createForm('div','class','form-group','lable','for','country','Country:','input','type','text','class','form-control','id','country','placeholder','Country')
var formField6 = document.createElement('div')
formField6.setAttribute('class','form-group')
var genderLabel = document.createElement('div')
genderLabel.innerHTML="Gender:"
var radioDiv =  document.createElement('div')
radioDiv.setAttribute('class','form-check form-check-inline')
var radioInput = document.createElement('input')
radioInput.setAttribute('class','form-check-input')
radioInput.setAttribute('type','radio')
radioInput.setAttribute('name','gender')
radioInput.setAttribute('id','male')
radioInput.setAttribute('value','male')
var radioLabel = document.createElement('label')
radioLabel.setAttribute('class','form-check-label ')
radioLabel.setAttribute('for','male')
radioLabel.innerHTML="Male"
var radio2Input = document.createElement('input')
radio2Input.setAttribute('class','form-check-input ml-2')
radio2Input.setAttribute('type','radio')
radio2Input.setAttribute('name','gender')
radio2Input.setAttribute('id','female')
radio2Input.setAttribute('value','female')
var radio2Label = document.createElement('label')
radio2Label.setAttribute('class','form-check-label ')
radio2Label.setAttribute('for','female')
radio2Label.innerHTML="Female"
radioDiv.append(radioInput,radioLabel,radio2Input,radio2Label)
formField6.append(genderLabel,radioDiv)


var formField7 = document.createElement('div')
formField7.setAttribute('class','form-group')
var foodLabel = document.createElement('div')
foodLabel.innerHTML="Choice of food: <i>(must choose at least 2 out of 5 options)</i>"

var foodOption1 = foodOptions('div','class','form-check','input','class','form-check-input','type','checkbox','id','north_indian','value','North Indian','label','class','form-check-label',
'for','north_indian',"North Indian",'name','food')
var foodOption2 = foodOptions('div','class','form-check','input','class','form-check-input','type','checkbox','id','south_indian','value','South Indian','label','class','form-check-label',
'for','south_indian',"South Indian",'name','food')
var foodOption3 = foodOptions('div','class','form-check','input','class','form-check-input','type','checkbox','id','japanese','value','Japanese','label','class','form-check-label',
'for','japanese',"Japanese",'name','food')
var foodOption4 = foodOptions('div','class','form-check','input','class','form-check-input','type','checkbox','id','chinese','value','Chinese','lable','class','form-check-label',
'for','chinese',"Chinese",'name','food')
var foodOption5 = foodOptions('div','class','form-check','input','class','form-check-input','type','checkbox','id','sea_food','value','Sea Food','label','class','form-check-label',
'for','sea_food',"Sea Food",'name','food')

formField7.append(foodLabel,foodOption1,foodOption2,foodOption3,foodOption4,foodOption5)

var formField8 = document.createElement('div')
formField8.setAttribute('class','form-group')
var submit = document.createElement("button")
submit.setAttribute('type','button')
submit.setAttribute('class','btn btn-secondary btn-lg btn-block')
submit.innerHTML="Submit"
submit.addEventListener('click',function(e) {
e.preventDefault

let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let address = []
address.push(address1.value)
address.push(address2.value)

let fname = document.getElementById('firstname').value
let lname = document.getElementById('lastname').value
let pincode = document.getElementById('pin').value
let gen = document.getElementsByName('gender')
let genValue="";
for(let i = 0 ; i < gen.length;i++)
{
  if(gen[i].checked)
  {
    genValue=gen[i].value
  }
}
let foodList = document.getElementsByName('food')
let res=[]
let flist=[]
for(let j = 0 ; j < foodList.length;j++)
{
  if(foodList[j].checked)
  {
    res.push(foodList[j].value)
  }
}
if(res.length <2)
{
  alert("Choose at least 2 food options")
}
else{
flist=res
}

let st = document.getElementById('state').value
let ct = document.getElementById('country').value

createTable(fname,lname,address.join(' '),pincode,genValue,flist.join(","),st,ct)
  
})
formField8.append(submit)
form.append(formField1,formField2,formField3,formField4,formField5,formField6,formField7,formField9,formField10,formField8)
formSide.append(h1Form,form)

//create database table
var dbSide = document.createElement('div')
dbSide.setAttribute('class','col-8')
varh1Db= document.createElement('h1')
varh1Db.innerHTML="Temporary Database:"
var dbTable = document.createElement('table')
dbTable.setAttribute('class','table')
var thead = document.createElement('thead')  
thead.setAttribute('class','thead-dark')
var tbody = document.createElement('tbody') 
var trows1 = createRows('tr','th','scope','col','Firstname')
var trows2 = createRows('tr','th','scope','col','Lastname')
var trows3 = createRows('tr','th','scope','col','Address')
var trows4 = createRows('tr','th','scope','col','Pincode')
var trows5 = createRows('tr','th','scope','col','Gender')
var trows6 = createRows('tr','th','scope','col','Food')
var trows7 = createRows('tr','th','scope','col','State')
var trows8 = createRows('tr','th','scope','col','Country')
thead.append(trows1,trows2,trows3,trows4,trows5,trows6,trows7,trows8)
dbTable.append(thead,tbody)
dbSide.append(varh1Db,dbTable)

mainRow.append(formSide,dbSide)
container.append(mainRow)
document.body.append(container)

//create table rows

function createRows(rowElement,thElement,thScope,thValue,value){

  var tr = document.createElement(rowElement)
  var th = document.createElement(thElement)
  th.setAttribute(thScope,thValue)
  th.innerHTML=value
  tr.append(th)
  return th
  
}

function createTable(firstname , lastname , address , pincode , gender , food, state , country){



  if(firstname!="" && lastname!="" &&  address!="" && pincode!="" &&  gender !="" && food!="" && state!="" && country!=""){

  let tbdy = document.getElementsByTagName('tbody')[0]
  let tr = document.createElement('tr')
  let td1 = document.createElement('td')
  td1.innerHTML=firstname
  let td2 = document.createElement('td')
  td2.innerHTML=lastname
  let td3 = document.createElement('td')
  td3.innerHTML=address
  let td4 = document.createElement('td')
  td4.innerHTML=pincode
  let td5 = document.createElement('td')
  td5.innerHTML=gender
  let td6 = document.createElement('td')
  td6.innerHTML=food
  let td7 = document.createElement('td')
  td7.innerHTML=state
  let td8 = document.createElement('td')
  td8.innerHTML=country
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
  tbdy.append(tr)
  pageReset()
  }
  else{
    alert("Please input value for all the fields")
  }

  
}


// create forms files function

  function createForm(element,elementClass,elementClassValue,lableElement,lableAtt,labelAttValue,value,inputElement,type,typeValue,inputClass,inputClassValue,id,idValue,placeHolder,placeHolderValue) {
      var div = document.createElement(element)
      div.setAttribute(elementClass,elementClassValue)
      var label = document.createElement(lableElement)
      label.setAttribute(lableAtt,labelAttValue)
      label.innerHTML = value
      var input = document.createElement(inputElement)
      input.setAttribute(type,typeValue)
      input.setAttribute(inputClass,inputClassValue)
      input.setAttribute(id,idValue)
      input.setAttribute(placeHolder,placeHolderValue)
      div.append(label,input)
      return div
      
  }
 
  //create checkbox option function

  function foodOptions(element,elementClass,elementClassValue,
    inputElment,inputClass,inputClassValue,type ,typeValue, id,idValue,value,valueValue,labelElement,labelClass,labelClassValue,labelAtt,labelAttValue,content,names,namesValue){

var foodDiv =  document.createElement(element)
foodDiv.setAttribute(elementClass,elementClassValue)
var foodInput = document.createElement(inputElment)
foodInput.setAttribute(inputClass,inputClassValue)
foodInput.setAttribute(type,typeValue) 
foodInput.setAttribute(id,idValue)
foodInput.setAttribute(value,valueValue)
foodInput.setAttribute(names,namesValue)
var foodOptionLabel = document.createElement(labelElement)
foodOptionLabel.setAttribute(labelClass,labelClassValue)
foodOptionLabel.setAttribute(labelAtt,labelAttValue)
foodOptionLabel.innerHTML=content

foodDiv.append(foodInput,foodOptionLabel)
return foodDiv

  }
// reset form after submit
  function pageReset(){
    firstname.value=""
    lastname.value=""
    address1.value=""
    address2.value=""
    pin.value=""
    male.checked=false
    female.checked=false
    north_indian.checked=false
    south_indian.checked=false
    japanese.checked=false
    chinese.checked=false
    sea_food.checked=false
    state.value=""
    country.value=""
    }
