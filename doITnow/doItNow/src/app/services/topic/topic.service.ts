import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getAllTopics() {
    let topicsList: any;
    if (localStorage.getItem('topics') && localStorage.getItem('topics') !== '') {
      topicsList = {
        status: 200,
        message: 'topics fetched sucessfully',
        data: JSON.parse(localStorage.getItem('topics'))
      };
    } else {
      topicsList = {
        status: 200,
        message: 'topics fetched sucessfully',
        data: JSON.parse(localStorage.getItem('topics'))
      };
    }

    return topicsList;
  }


  getArticlesByTopicId(topicId) {
    let articlesList: any;
    if (localStorage.getItem('articles') && localStorage.getItem('articles') !== '') {
      const articles = JSON.parse(localStorage.getItem('articles'));
      articlesList = articles.filter(t => t.topicId === topicId);    }

    return articlesList.length > 0 ? articlesList[0].articles : [];
  }
}
