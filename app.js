let title = document.getElementById("title");
let bookMarkUrl = document.getElementById("bookMarkUrl");
let display = document.getElementById("display");
let noBookmark = document.getElementById("noBookmark");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let arr = JSON.parse(localStorage.getItem("title")) || [];
let arr2 = JSON.parse(localStorage.getItem("bookMarkUrl")) || [];


function renderBookmarks() {

    if (arr.length === 0 && arr2.length === 0) {
        noBookmark.classList.remove('hidden');
        deleteAllBtn.classList.add('hidden');
    } else {
        noBookmark.classList.add('hidden');
        deleteAllBtn.classList.remove('hidden');
    }

    display.innerHTML = "";


    for (let i = 0; i < arr.length; i++)
        display.innerHTML += `<div class="bg-gray-900 border-l-4 border-indigo-500 rounded-xl p-4 flex justify-between items-center">
                <div>
                    <h3 class="font-semibold text-lg text-indigo-300">${arr[i]}</h3>
                    <a href="${arr2[i]}" target="_blank" class="text-indigo-400 hover:underline text-lg">${arr2[i]}</a>
                </div>
                <button onclick="delBookmark(${i})" class="text-red-400 hover:text-red-500 font-semibold">Delete</button>
                </div>`;
}




function savebookmark() {
    
    if (title.value && bookMarkUrl.value) {
        arr.push(title.value);
        arr2.push(bookMarkUrl.value);
    } else {
        alert("please fill out both fields...!!!")
    }
    

    localStorage.setItem("title", JSON.stringify(arr));
    localStorage.setItem("bookMarkUrl", JSON.stringify(arr2));
    renderBookmarks();
    
    
    title.value = "";
    bookMarkUrl.value = "";
}



function delBookmark(index) {
    
    arr.splice(index, 1);
    arr2.splice(index, 1);
    
    localStorage.setItem("title", JSON.stringify(arr));
    localStorage.setItem("bookMarkUrl", JSON.stringify(arr2));
    
    renderBookmarks();
}

function deleteAllBookmarks() {
    localStorage.removeItem("title");
    localStorage.removeItem("bookMarkUrl");
    arr = [];
    arr2 = [];
    renderBookmarks();
}


renderBookmarks();