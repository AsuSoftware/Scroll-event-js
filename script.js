'use strict';

const containerBox = document.querySelector('.container-scroll');

const data = [
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    }
];

const anotherData = [
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    },
    {
        title: 'Test',
        description: 'Info'
    }
];

const addData = () => {
    data.forEach(element => {
        let box = document.createElement("div");
        let title = document.createElement("p");
        let info = document.createElement("p");
        let titleInfo = document.createTextNode(element.title);
        let descriptionInfo = document.createTextNode(element.description);
        box.className = "box";
        title.className = "title";
        info.className = "description";
        title.appendChild(titleInfo);
        info.appendChild(descriptionInfo);
        box.appendChild(title);
        box.appendChild(info);
        containerBox.appendChild(box);
    });
};

window.addEventListener("load", addData);

let actualPage = 0;

/*
 * The scrollHeight property returns the entire height of an element
 * The innerHeight property returns the height of a window's content area
 * The window.scrollY is the height of the current scroll
*/

document.addEventListener('scroll', () => {
    let scrollPoint = window.scrollY;
    let totalBodyPageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    if (scrollPoint === (totalBodyPageHeight - windowHeight)) {
        console.log("A intrat");
        actualPage = actualPage + 1;
        // make an http call with page incremented
         console.log(actualPage);
          setTimeout(() => {
              anotherData.forEach(element => data.push(element));
              addData();
          }, 3000);
    }
});