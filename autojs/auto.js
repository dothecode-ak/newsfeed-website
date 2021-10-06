const serachDiv = document.querySelector('#newSearchDivData');
const inputBox = serachDiv.querySelector('input');
const suggestBox = serachDiv.querySelector('.autoBox');
inputBox.onkeyup = (e) => {
    console.log(e.target.value)
    let userData = e.target.value;
    let blankList = [];
    if (userData) {
        blankList = source_search.filter((data) => {
            //filter the array list data
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        //add the list
        blankList = blankList.map((data) => {
            return data = '<li>' + data + '</li>'
        })
        console.log(blankList);
        serachDiv.classList.add("active");// show auto
        showData(blankList)
        let allList = suggestBox.querySelectorAll('li');
        for (let m = 0; m < allList.length; m++) {
            allList[m].setAttribute("onclick", "select(this)");
        }
    }
    else {

        serachDiv.classList.remove("active");//hide sutos
    }

}
function select(ele) {
    let selectedUserData = ele.textContent;
    console.log(selectedUserData);
    inputBox.value = selectedUserData;
    serachDiv.classList.remove("active");//hide sutos
}

function showData(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join('');
    }
    suggestBox.innerHTML = listData;
}