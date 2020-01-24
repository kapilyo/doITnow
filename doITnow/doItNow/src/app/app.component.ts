import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doItNow';
}
const topics = [
  {
    topicId: 1,
    topicName: 'user-interface',
    articles: 25,
    // tslint:disable-next-line: max-line-length
    topicDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula.'
  },
  {
    topicId: 2,
    topicName: 'javascript',
    articles: 58,
    // tslint:disable-next-line: max-line-length
    topicDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula.'
  },
  {
    topicId: 3,
    topicName: 'photography',
    articles: 25,
    // tslint:disable-next-line: max-line-length
    topicDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula.'
  },
  {
    topicId: 4,
    topicName: 'automobiles',
    articles: 5,
    // tslint:disable-next-line: max-line-length
    topicDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula.'
  }
];

const articles = [
  {
    topicId: 1,
    articles: [
      {
        articleId: 1,
        articleName: 'article1 asdasd',
        // tslint:disable-next-line: max-line-length
        articleDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula. Vestibulum dignissim fermentum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet vehicula ante sit amet ultrices. Sed commodo fermentum metus, eget vehicula ex facilisis vitae. '
      },
      {
        articleId: 2,
        articleName: 'article1 basbas',
        // tslint:disable-next-line: max-line-length
        articleDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula. Vestibulum dignissim fermentum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet vehicula ante sit amet ultrices. Sed commodo fermentum metus, eget vehicula ex facilisis vitae. '
      }
    ]
  },
  {
    topicId: 2,
    articles: [
      {
        articleId: 1,
        articleName: 'article2 asdasd',
        // tslint:disable-next-line: max-line-length
        articleDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula. Vestibulum dignissim fermentum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet vehicula ante sit amet ultrices. Sed commodo fermentum metus, eget vehicula ex facilisis vitae. '
      },
      {
        articleId: 2,
        articleName: 'article2 basbas',
        // tslint:disable-next-line: max-line-length
        articleDesc: 'Vestibulum sed neque maximus, congue enim eu, tristique tellus. In nec commodo augue, id iaculis turpis. Fusce felis nibh, varius non tincidunt eget, porttitor eu purus. Suspendisse vel dui facilisis, efficitur erat imperdiet, pharetra risus. Integer fringilla metus ut lacus sodales, non vulputate turpis porta. Cras tempor placerat iaculis. Donec iaculis ut nisl in vehicula. Vestibulum dignissim fermentum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed imperdiet vehicula ante sit amet ultrices. Sed commodo fermentum metus, eget vehicula ex facilisis vitae. '
      }
    ]
  }
];

localStorage.setItem('topics', JSON.stringify(topics));
localStorage.setItem('articles', JSON.stringify(articles));
