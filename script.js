// trending  
var arr1=[
    { name:"DEADPOOL",
      img:"https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:" ",
      productionhouse:"MARVEL",
      duration:"2h 30m"
}, 
{ name:"BATMAN",
img:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tag:" ",
productionhouse:"DC",
duration:"1h 30m"
},
 { name:"JAMES BOND",
img:"https://images.unsplash.com/photo-1597268489488-28be7e3e2baf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tag:" ",
productionhouse:"james",
duration:"1h 40m"
}, 
{ name:"MATRIX",
img:"https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tag:" ",
productionhouse:"matrix",
duration:"2h 10m"
} ]

function print1(){
    var clutter1 = "";
        arr1.forEach(function (val1 , index) {
            clutter1 += `
            <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('${val1.img}'); background-position: center;
            background-size: cover;">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${val1.name}</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                  <div class="circle1 center" style="">
                  s
                  </div>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    <small>${val1.productionhouse}</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <h5 >${val1.duration}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div> `;
        })
        console.log(clutter1)
        document.getElementById("trending").innerHTML = clutter1;

        }
 print1();

//  movies

var arr2=[
    {
    name:"RRR",
    img:"https://images5.alphacoders.com/131/1319750.jpeg",
    tag:" ",
    productionhouse:"DVV entertainment",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 
{
    name:"SALAAR",
    img:"https://img.youtube.com/vi/HihakYi5M2I/sddefault.jpg",
    tag:" ",
    productionhouse:" HOMBALE FILMS",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 
{
    name:"INDIAN2",
    img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/05/indian-2-kamal-haasans-action-thriller-not-shelved-confirm-makers-001.jpg",
    tag:" ",
    productionhouse:"lyca production",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 

]

function print2 = () => {
    var clutter2 = "";
        arr2.forEach(function (val2 , index) {
            clutter2 += ` 
            <div class="carddd">
            <div class="imggg" style="background-image: url(${val2.img})">
                <h1>${val2.name}</h1>
                <p>${val2.paragraph}</p>
                <div class="low-content">
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary color60">Watch</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Add to playlist</button>
               </div>
               <small style="color:#129171; font-weight:800">${val2.duration}</small>
            </div>
                
                </div>
    
            </div>
    
        </div>
            `;
        })
        console.log(clutter2)
        document.getElementById("movie-card-container").innerHTML = clutter2;

        }
 print2();



var arr3=[
    {
    name:"DARK",
    img:"https://images.unsplash.com/photo-1567629780805-fa1fd8bcedda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:" ",
    productionhouse:"MARVEL",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 
{
    name:"house of dragon",
    img:"https://images.unsplash.com/photo-1516888531328-d33c9aa594a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:" ",
    productionhouse:"MARVEL",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 
{
    name:"DEADPOOL",
    img:"https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:" ",
    productionhouse:"MARVEL",
    paragraph:" xyzxyzxyzxyz",
    duration:"2h 30m"
}, 

]

function print3(){
    var clutter3= "";
        arr3.forEach(function (val3 , index) {
            clutter3 += `  <div class="carddd">
            <div class="imggg" style="background-image: url(${val3.img})">
                <h1>${val3.name}</h1>
                <p>${val3.paragraph}</p>
                <div class="low-content">
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary color60">Watch</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Add to playlist</button>
               </div>
               <small style="color:#129171; font-weight:800">${val3.duration}</small>
            </div>
                
                </div>
    
            </div>
    
        </div> `;
        })
        console.log(clutter3)
        document.getElementById("series-card-container").innerHTML = clutter3;

        }
 print3();