const containCours = document.getElementById('courses');


fetch('./coursesData/data.json')
  .then(res => res.json())
  .then(data => {
    containCours.innerHTML = printCours(data)
  })
  .catch(err => console.error(err))

const printCours = (arr) => {
  let template = '';

  if (Array.isArray(arr)) {
    arr.forEach(({ classColor, name, process, image, test }) => {
      template += `<div class="Base_buttons mt-2 row m-0 p-0">
      <div class="col-md-6 card-flex pr-0">
      <div class="d-inline-block m-2 rounded-circle bg-${classColor}">
  <img src="${image}" alt="${name}" class="p-3">

  </div>
  <div class="d-inline py-4 pl-3">
  <p class="mb-2 Size_title mt-2">${name}</p>
      <div class="progress Size_progress">
      ${printProgress(process)}
  </div>
  <h6 class="Size_text mb-0 mt-2">Tu progreso</h6>
  </div>
  </div>
  <div class="col-md-6 m-0 d-flex justify-content-center align-items-center">
  <div class="mx-2">
    <div class="space border-space rounded-circle">
    </div>
    <span class="Size_text mb-0 mt-2">${test.complete == 1 ? es.complete : test.try + " " + es.try} </span>
    </div>
    ${printInsignia(process, es)}
  </div>
      </div>`
    })

    return template;
  } else return 'Error no se esperaba dicha estructura';
}

const printProgress = (obj) => {
  let progress = '';
  let account = 0;

  for (const key in obj) {
    account += obj[key].total
  }

  for (const key in obj) {
    console.log(key)
    const percentage = obj[key].complete * 100 / account;
    progress += `
    <div class="progress-bar bg-${key}" role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"></div>
    `
  }
  return progress;
}

const printInsignia = (obj, lang) => {
  let insignia = '';
  for (const key in obj) {

    insignia += `
    <div class="mx-2 d-flex flex-column align-items-center">
    <div class="space rounded-circle d-flex justify-content-center border-${key}">
    <img src="${obj[key].img}" alt="${lang[key]}">
    </div>  
    <span class="Size_text">${obj[key].complete + " " + lang[key]}</span>
    </div>
    `
  }
  return insignia;
}