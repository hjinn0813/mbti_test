import {results, mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti') //쿼리스트링 알아내는 법
const result = results [mbtis [mbti]] //단수,복수에 따라 달라지니 주의

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index){
  boxEl.innerHTML = result.results[index]
}) 
jobEls.forEach(function (jobEl, index){
  jobEl.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg