import { Component } from '@angular/core';

//组件元数据装饰器, 装饰器里的属性就是元数据
@Component({
  selector: 'app-root', //选择器
  templateUrl: './app.component.html',//模板
  styleUrls: ['./app.component.css']//当前组件模板应用的css
})
//组件控制器
export class AppComponent {
  title = 'app';
}
//@input 输入属性： 父组件可以传递数据到子组件
//prividers 做依赖注入
//生命周期钩子： 
//styless
//animations
//@output: 定义其他组件感兴趣的事情