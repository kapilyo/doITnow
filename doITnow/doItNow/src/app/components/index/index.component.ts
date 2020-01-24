import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic/topic.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  topics: any;
  topicsData: any;
  articlesData: any;
  selectedTopic: any;
  constructor(private topicsService: TopicService, private router: Router) { }

  ngOnInit() {
    this.getTopicsList();
  }

  getTopicsList() {
    this.topics = this.topicsService.getAllTopics();
    this.topicsData = this.topics.data;
    this.selectedTopic = this.topicsData[0];
    this.getArticles(this.topicsData[0].topicId);
  }


  getArticles(topicId) {
    this.articlesData = this.topicsService.getArticlesByTopicId(topicId);
  }


  public topicClick(topic: any) {
    this.selectedTopic = topic;
    this.getArticles(topic.topicId);
    // How to remove 'active' from siblings ?
  }

  articleClick(article: any) {
    this.router.navigate(['home']);
  }

}
