function Loadjson(file,callback){
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState===4 && x.status=="200"){
      callback(x.responseText);
    }
  };
  x.send(null);
}

Loadjson("data.json", function(text){
  var data=JSON.parse(text);
  console.log(data);
  basics(data.details);
  career(data.career);
  education(data.education);
  skillset(data.keyskills);
  achieve(data.achievement);
})

var child1 = document.querySelector(".child1");

function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var phone = document.createElement("h3");
  phone.textContent = det.phoneno;
  child1.appendChild(phone);

  var email = document.createElement("a");
  email.href = "mailto:anudeepdumpala@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address:";
  child1.appendChild(add);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var add = document.createElement("h3");
  add.textContent = det.Address;
  child1.appendChild(add);
}

var child2 = document.querySelector(".child2");

function career(det){

  var cap = document.createElement("h2");
  cap.textContent = det.cap;
  child2.appendChild(cap);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var inf1 = document.createElement("p");
  inf1.textContent = det.info1;
  child2.appendChild(inf1);

  var inf2 = document.createElement("p");
  inf2.textContent = det.info2;
  child2.appendChild(inf2);

}

function education(det){

  var cap = document.createElement("h2");
  cap.textContent = "Educational Details :-";
  child2.appendChild(cap);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<det.length;i++){
    var degree = document.createElement("h4");
    degree.textContent = det[i].degree;
    child2.appendChild(degree);

    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    li1.textContent = det[i].institute;
    li2.textContent = det[i].date;
    ul.appendChild(li1);
    ul.appendChild(li2);
    child2.appendChild(ul);
  }
}

function skillset(det){
  var cap = document.createElement("h2");
  cap.textContent = "Technical Skills :-";
  child2.appendChild(cap);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  /*for(i=0;i<det.length;i++){
    var role = document.createElement("h4");
    role.textContent = det[i].title;
    child2.appendChild(role);

    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = det[i].info;
    ul.appendChild(li);
    child2.appendChild(ul);
  }*/

  var skilldata = document.createElement("table");
  skilldata.border = "1";
  child2.appendChild(skilldata);

  tabledata= "";
  for(i=0;i<det.length;i++){
    tabledata = tabledata + "<tr><td>"+det[i].title+"</td><td>"+det[i].info+"</td></tr>";
  }
  skilldata.innerHTML = tabledata;
}

function achieve(det){
  var cap = document.createElement("h2");
  cap.textContent = "Achievements :-";
  child2.appendChild(cap);
  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<det.length;i++){
    var ul = document.createElement("ul");
    var tit = document.createElement("h4");
    var li1 = document.createElement("li");
    tit.textContent = det[i].title;
    li1.textContent = det[i].info;
    child2.appendChild(tit);
    ul.appendChild(li1);
    child2.appendChild(ul);
  }
  // var achievedata = document.createElement("ul");
  // achievedata.border = "1";
  // child2.appendChild(achievedata);
  //
  // achievetable= "";
  // for(i=0;i<det.length;i++){
  //   achievetable = achievetable + "<tr><td>"+det[i].title+"</td><td>"+det[i].info+"</td></tr>";
  // }
  // achievedata.innerHTML = achievetable;
}
