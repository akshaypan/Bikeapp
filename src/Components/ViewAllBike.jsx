import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllBike = () => {
  var[data,changeData]=useState(
    [
      {"Bikemod":"Motorcycle - TVS Apache RR 310","Bikecom":"TVS","price":"50000","image":"https://imgs.search.brave.com/5vvZdARexkHO17_G1Tzq-lTGjHiRQ1_zdr3wQP_0DPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/My8xMC8yMy90dnMt/YXBhY2hlLXJyLTMx/MC10dnMtbW90b3It/Y29tcGFueS1tb3Rv/cmN5Y2xlLXNwb3J0/LWJpa2UtcG5nLWZh/dnBuZy1ZYzUyVDlN/YnBNMDg3UFduTGtN/NjdtOHpOX3QuanBn"},
      {"Bikemod":"Motorcycle - Suzuki Hayabusa","Bikecom":"Suzuki","price":"45000","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyI3W2XZcUHe0Jgb42OVQgbfLnnpqx6vKv0w&s"},
      {"Bikemod":"Motorcycle - Kawasaki 2021 Ninja H2","Bikecom":"Yamaha","price":"49000","image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/2022-kawasaki-ninja-h2-sx-se--.jpg?size=690:388"},
      {"Bikemod":"Motorcycle - black YAMAHA R15","Bikecom":"YAMAHA","price":"45001","image":"https://5.imimg.com/data5/ANDROID/Default/2022/12/BV/QE/TA/181166314/product-jpeg.jpg"},
      {"Bikemod":"Motorcycle - KTM 200 DUKE","Bikecom":"KTM","price":"45080","image":"https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/ktm-select-model-electronic-orange-2023-1687257137470.png?q=80"},
      {"Bikemod":"Motorcycle - KTM 250 DUKE","Bikecom":"KTM","price":"45900","image":"https://imgd.aeplcdn.com/1280x720/n/cw/ec/155737/duke-250-right-side-view-2.png?isig=0"}
    ]
  )
  var [data1,changeData]=useState(
    [
      {"SI":1,"bike":"Xtreme 125R","bikecom":"Hero","price":90000},
      {"SI":2,"bike":"Xtreme 160R Stealth 2.0","bikecom":"Hero","price":190000},
      {"SI":3,"bike":"New KTM 990","bikecom":"Duke","price":80000}
    ]
  )
  return (
    <div>

<NavigationBar/>
<div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
           

            {data.map(
              (value,index)=>{
                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                   <img src={value.image} class="card-img-top" alt="..."/>
                   <div class="card-body">
                     <h5 class="card-title">{value.Bikemod}</h5>
                     <p class="card-text">{value.Bikecom}</p>
                     <p class="card-text">Rs.{value.price}</p>
                     <a href="#" class="btn btn-primary">Buy now</a>
                   </div>
                 </div>
     
               </div>

              }
            )}




            
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">SI No.</th>
      <th scope="col">Bike</th>
      <th scope="col">Bike company</th>
      <th scope="col">Bike price</th>
    </tr>
  </thead>
  <tbody>
    
    {data1.map(
      (val,i)=>{
        return <tr>
        <th scope="row">{val.SI}</th>
        <td>{val.bike}</td>
        <td>{val.bikecom}</td>
        <td>Rs.{val.price}</td>
      </tr>
      }
    )}

  </tbody>
</table>

                </div>
            </div>
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default ViewAllBike