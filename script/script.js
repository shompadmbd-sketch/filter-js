// let thrivingList = [];
// let strugglingList = [];

// let total = document.getElementById('total');
// let strugglingCount = document.getElementById('stugglingCount');
// let trivingCount = document.getElementById('trivingCount')

// const allFilterBtn = document.getElementById('all-filter-btn');
// const trivingFilterBtn = document.getElementById('triving-filter-btn');
// const strugglingFilterBtn = document.getElementById('struglling-filter-btn');

// const allCardSection = document.getElementById('allCards');
// // console.log(allCardSection.children.length);
// // thrivingList.push({name: 'plant 1'},{name: 'plant 1'})//checking purpose
//  const mainContainer = document.querySelector('main');
//  const filterSection = document.getElementById('filtered-section');
// //  console.log(mainContainer);


//  function calculateCount (){
//      total.innerText = allCardSection.children.length;
//      trivingCount.innerText = thrivingList.length;
//     strugglingCount.innerText = strugglingList.length;
// }

// calculateCount();
// function toggleStyle(id){
//      // adding gray bg for all
//     allFilterBtn.classList.add('bg-gray-300', 'text-black');
//     trivingFilterBtn.classList.add('bg-gray-300', 'text-black');
//     strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');
     
//     //if any button has black then remove
//      allFilterBtn.classList.remove('bg-black', 'text-white');
//     trivingFilterBtn.classList.remove('bg-black', 'text-white');
//     strugglingFilterBtn.classList.remove('bg-black', 'text-white');
      
//     // console.log(id);
//     const selected = document.getElementById(id);
//     // console.log(selected);
//     // adding black bg for current button
//      selected.classList.remove('bg-gray-300', 'text-black');
//     selected.classList.add('bg-black', 'text-white');

//     if(id == 'triving-filter-btn'){
//         allCardSection .classList.add('hidden');
//         filterSection.classList.remove('hidden');
//     } else if(id== 'all-filter-btn'){
//         allCardSection.classList.remove('hidden');
//         filterSection.classList.add('hidden');
//     }
// }

// mainContainer.addEventListener('click', function(event){
//     console.log(event.target.classList.contains('triving btn'));

//    if(event.target.classList.contains('triving btn')){
//      const parentNode = event.target.parentNode.parentNode;
//     const plantName = parentNode.querySelector('.plantName').innerText;
//     const latinName = parentNode.querySelector('.latinName').innerText;
//     const light = parentNode.querySelector('.light').innerText;
//     const water = parentNode.querySelector('.water').innerText;
//     const status = parentNode.querySelector('.status').innerText;
//     const notes = parentNode.querySelector('.notes').innerText;
//     // console.log(plantName,notes,status,water,light, latinName);
//        parentNode.querySelector('.status').innerText = 'Thrive'
//     const cardInfo ={
//        // object make korbo
//     plantName,
//     latinName,
//     light, 
//     water,
//     status,
//     notes

//     }
// //    console.log(cardInfo);
//  const plantExist =   thrivingList.find(item=> item.plantName == cardInfo.plantName);

//  if(plantExist){
//     thrivingList.push(cardInfo);
//  }
// // console.log(thrivingList);
//  renderThriving();
//    }
// })

// function renderThriving() {
//     // make the filterSection empty every time
//     filterSection.innerHTML = ''

//     // crating innerHtml
//     for (let thrive of thrivingList) {
//         console.log(thrive);

//         let div = document.createElement('div');
//         div.className = 'card flex justify-between border p-8'
//         div.innerHTML = `
//          <div class="space-y-6">
//                     <!-- part 1 -->
//                     <div>
//                         <p class="plantName text-4xl">${thrive.plantName}</p>
//                         <p class="latinName">Latin Name</p>
//                     </div>

//                     <!-- part 2 -->
//                     <div class="flex gap-2">
//                         <p class="light bg-gray-200 px-5">Bright Indicate</p>
//                         <p class="water bg-gray-200 px-5">weekly</p>
//                     </div>
//                     <!-- part 3 -->
//                      <p class="status">${thrive.status}</p>
//                      <p class="notes">New leaf unfurling by the east window.</p>

//                      <div class="flex gap-5">
//                         <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
//                         <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
//                      </div>
//                 </div>

//                 <!-- main part 2 -->
//                 <div>
//                     <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
//                 </div>
//         `
//         filterSection.appendChild(div)
//     }
// }

let thrivingList = [];
let strugglingList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length //3
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length
}

calculateCount()

// step 1;
function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Thriving, Struggling)
    if (id == 'thriving-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderStruggling()
    }
}


// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('thriving-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Thrive'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Thrive',
            notes
        }

        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            thrivingList.push(cardInfo)
        }

        // step 2 finish
        // removing the plant from struggling list
        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName)

        // after remove rerender the html
        if (currentStatus == 'struggling-filter-btn') {
            renderStruggling()
        }

         calculateCount()


    } else if (event.target.classList.contains('struggling-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Struggle'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Struggle',
            notes
        }

        const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            strugglingList.push(cardInfo)
        }

        // removing the plant from thriving list
        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName)

        // console.log(thrivingList);

        // after remove rerender the html
        if (currentStatus == "thriving-filter-btn") {
            renderThriving();
        }
        calculateCount()

    }


    // if (event.target.classList.contains('btn-delete')) {
    //     const cardNode = event.target.parentNode.parentNode;
    //     const plantName = cardNode.querySelector('.plantName').innerText;

    //     // ১. DOM থেকে কার্ডটি সরিয়ে ফেলা
    //     cardNode.remove();

    //     // ২. ডাটা লিস্ট (Array) থেকে রিমুভ করা
    //     thrivingList = thrivingList.filter(item => item.plantName !== plantName);
    //     strugglingList = strugglingList.filter(item => item.plantName !== plantName);

    //     // ৩. কাউন্টার আপডেট করা
    //     calculateCount();
        
    //     // ৪. যদি ফিল্টার ভিউতে থাকে, তবে রেন্ডার ফাংশন কল করা যাতে লিস্ট আপডেট হয়
    //     if (currentStatus === 'thriving-filter-btn') {
    //         renderThriving();
    //     } else if (currentStatus === 'struggling-filter-btn') {
    //         renderStruggling();
    //     }
    // }


//     if (event.target.classList.contains('btn-delete')) {
//     // ডিলিট করার আগে একটি মেসেজ দেখানো
//     alert("This plant has been deleted successfully!");

//     const cardNode = event.target.parentNode.parentNode;
//     const plantName = cardNode.querySelector('.plantName').innerText;

//     // ১. স্ক্রিন থেকে কার্ডটি সরিয়ে ফেলা
//     cardNode.remove();

//     // ২. ডাটা লিস্ট থেকে মুছে ফেলা
//     thrivingList = thrivingList.filter(item => item.plantName !== plantName);
//     strugglingList = strugglingList.filter(item => item.plantName !== plantName);

//     // ৩. উপরের সংখ্যাগুলো আপডেট করা
//     calculateCount();
    
//     // ৪. ফিল্টার ভিউ ঠিক রাখা
//     if (currentStatus === 'thriving-filter-btn') {
//         renderThriving();
//     } else if (currentStatus === 'struggling-filter-btn') {
//         renderStruggling();
//     }
// }


// if (event.target.classList.contains('btn-delete')) {
//     const cardNode = event.target.parentNode.parentNode;
//     const plantName = cardNode.querySelector('.plantName').innerText;
    
//     // কার্ডের বর্তমান স্ট্যাটাস (Thrive, Struggle অথবা Not applicable) খুঁজে বের করা
//     const currentPlantStatus = cardNode.querySelector('.status').innerText;

//     // স্ট্যাটাস অনুযায়ী ডাইনামিক অ্যালার্ট মেসেজ
//     alert(`This ${currentPlantStatus} plant has been deleted successfully!`);

//     // ১. DOM থেকে কার্ডটি রিমুভ করা
//     cardNode.remove();

//     // ২. ডাটা লিস্ট থেকে মুছে ফেলা
//     thrivingList = thrivingList.filter(item => item.plantName !== plantName);
//     strugglingList = strugglingList.filter(item => item.plantName !== plantName);

//     // ৩. কাউন্টার আপডেট করা
//     calculateCount();
    
//     // ৪. ফিল্টার ভিউ আপডেট করা
//     if (currentStatus === 'thriving-filter-btn') {
//         renderThriving();
//     } else if (currentStatus === 'struggling-filter-btn') {
//         renderStruggling();
//     }
// }


 if (event.target.classList.contains('btn-delete')) {
     const cardNode = event.target.parentNode.parentNode;
     const plantName = cardNode.querySelector('.plantName').innerText;
    
     // কার্ডের বর্তমান স্ট্যাটাস (Thrive বা Struggle) সংগ্রহ করা
     const currentPlantStatus = cardNode.querySelector('.status').innerText;

     // আপনার চাহিদা অনুযায়ী ডাইনামিক অ্যালার্ট মেসেজ
     // মেসেজটি হবে: Are you sure you delete Thrive button? (অথবা Struggle button)
    alert(`Are you sure you delete ${currentPlantStatus} button?`);

     // ১. DOM (HTML) থেকে কার্ডটি রিমুভ করা
     cardNode.remove();

     // ২. ডাটা লিস্ট (Arrays) থেকে মুছে ফেলা
    thrivingList = thrivingList.filter(item => item.plantName !== plantName);
     strugglingList = strugglingList.filter(item => item.plantName !== plantName);
    // ৩. কাউন্টার (Total, Thrive, Struggle) আপডেট করা
     calculateCount();
    
     // ৪. ফিল্টার ভিউ রি-রেন্ডার করা
     if (currentStatus === 'thriving-filter-btn') {
        renderThriving();
    } else if (currentStatus === 'struggling-filter-btn') {
       renderStruggling();
    }
 }


})

// step 3  html file create
function renderThriving() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let thrive of thrivingList) {
        console.log(thrive);

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${thrive.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${thrive.status}</p>
                     <p class="notes">New leaf unfurling by the east window.</p>

                     <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderStruggling() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // crating innerHtml
    for (let struggle of strugglingList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${struggle.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${struggle.status}</p>
                     <p class="notes">New leaf unfurling by the east window.</p>

                     <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}