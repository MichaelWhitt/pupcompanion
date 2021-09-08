



// function RenderMap(props){

//     var APIKEY = "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2";
//     var Dallas = [-96.79621, 32.77798];

//     tt.setProductInfo('<your-product-name>', '<your-product-version>');

//     useEffect( () => { 
//         var map = tt.map({
//             key: APIKEY,
//             container: "mapContainer", 
//             center: Dallas,
//             zoom: 14
//         });
//     }, [] )

//     // var map = tt.map({
//     //         key: APIKEY,
//     //         container: "mapContainer", 
//     //         center: Dallas,
//     //         zoom: 14
//     //     });

//     // var moveMap = function(lnglat){
//     //     map.flyTo({
//     //         center: lnglat,
//     //         zoom: 14
//     //     })
//     // }

//     // var handleResults = function(result){
//     //     console.log(result);
//     //     console.log(result.results);
//     //     console.log(result.results.length);
//     //     result.results.map(r => console.log(r.poi.name + r.poi.phone + r.poi.url))
//     //     if (result){
//     //         for (let x = 0; x < result.results.length; x++){
//     //             var marker = new tt.Marker()
//     //             .setLngLat(result.results[x].position)
//     //             .addTo(map);
//     //             var newDiv = document.createElement("div");
//     //             newDiv.innerHTML = `${x + 1}: ${result.results[x].poi.name}`
//     //             document.body.append(newDiv);
//     //         } 
//     //     }
//     // }

//     // var search = function(){
//     //     tt.services.fuzzySearch({
//     //         key: APIKEY,
//     //         query: document.getElementById("query").value,
//     //         boundingBox: map.getBounds()
//     //     }).then(handleResults)
//     // }

//     return (
//         <div>
            
//         </div>
//     )
// }
// export default RenderMap;