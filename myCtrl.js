var app = angular.module('app',[]);
app.controller('myCtrl',function($scope,$interval){
		$scope.sDays = {
    	'font-size': '150px',
    	'display':'none',
        'text-align':'center',
        'margin':'0 auto'
    	};
    	$scope.sHours = {
    	'display': '',
    	'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
    	};
		$scope.sMinutes = {
			'display': 'none',
			'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
		};
		$scope.sSeconds = {
			'display': 'none',
			'font-size': '80px',
        'text-align':'center',
        'margin':'0 auto'
		};
	// $interval(function GetRTime() {
	// var p = 0.00000000001;
 //    var EndTime= new Date('2017/01/26 08:30:00');
 //    var NowTime = new Date();
 //    var StartTime = new Date('2016/12/01 08:30:00')
 //    var t =EndTime.getTime() - NowTime.getTime() -;
 //    var d=0;
 //    var h=0;
 //    var m=0;
 //    var s=0;
 //    var ed = 
 //    if(p>0){
 //    	p=100-(NowTime.getTime()-StartTime.getTime())/(EndTime.getTime()-StartTime.getTime())*100
 //    	p=p.toFixed(2)
 //    }else{
 //    	p=0;
 //    }
 //    if(t>=0){
 //      d=Math.floor(t/1000/60/60/24-7);
 //      h=Math.floor(t/1000/60/60);
 //      m=Math.floor(t/1000/60);
 //      s=Math.floor(t/1000);
 //      l=Math.floor(t/1000%60);
 //    }
 //    $scope.days = d;
 //    $scope.hours = h;
 //    $scope.minutes = m;
 //    $scope.seconds = s;
 //    $scope.per = p;
 //    $scope.percent = {
 //   'background':'white',  
 //   'float':'left', 
 //   'height':'100%',  
 //   'text-align':'center',  
 //   'line-height':'150%',
 //   'width':p+'%' 
 //    }

 //    if(l==30){
 //    	$scope.sDays = {
 //    	'font-size': '150px',
 //    	'display':'none'
 //    	}
 //    	$scope.sHours = {
 //    	'display': '',
 //    	'font-size': '100px'
 //    	}
	// 	$scope.sMinutes = {
	// 		'display': 'none',
	// 		'font-size': '100px'
	// 	}
	// 	$scope.sSeconds = {
	// 		'display': 'none',
	// 		'font-size': '80px'
	// 	}
	// }
 //    if(l==20){
 //    	$scope.sDays = {
 //    	'font-size': '150px',
 //    	'display':'none'
 //    	}
 //    	$scope.sHours = {
 //    	'display': 'none',
 //    	'font-size': '100px'
 //    	}
	// 	$scope.sMinutes = {
	// 		'display': '',
	// 		'font-size': '100px'
	// 	}
	// 	$scope.sSeconds = {
	// 		'display': 'none',
	// 		'font-size': '80px'
	// 	}
	// }
 //    if (l==10) {
 //    	$scope.sDays = {
 //    	'font-size': '150px',
 //    	'display':'none'
 //    	}
 //    	$scope.sHours = {
 //    	'display': 'none',
 //    	'font-size': '100px'
 //    	}
	// 	$scope.sMinutes = {
	// 		'display': 'none',
	// 		'font-size': '100px'
	// 	}
	// 	$scope.sSeconds = {
	// 		'display': '',
	// 		'font-size': '80px'
	// 	}
 //    }
 //    if (l==0) {
 //    	$scope.sDays = {
 //    	'font-size': '150px',
 //    	'display':''
 //    	}
 //    	$scope.sHours = {
 //    	'display': 'none',
 //    	'font-size': '100px'
 //    	}
	// 	$scope.sMinutes = {
	// 		'display': 'none',
	// 		'font-size': '100px'
	// 	}
	// 	$scope.sSeconds = {
	// 		'display': 'none',
	// 		'font-size': '80px'
	// 	}
 //    }
	// },1000);

var wDay;   //工作日期
var edDay;  //过去了几天
var NowTime;    //今天日期

Date.prototype.format=function (){
    var s='';
    s+=this.getFullYear()+'-';          // 获取年份。
    s+=(this.getMonth()+1)+"-";         // 获取月份。
    s+= this.getDate();                 // 获取日。
    return(s);                          // 返回日期。
};

function getAll(begin,end){
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setUTCFullYear(ab[0], ab[1]-1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1]-1, ae[2]);
    var unixDb=db.getTime();
    var unixDe=de.getTime();
    var i = 0;
    var a = [];
    var b = [];
    for(var k=unixDb;k<=unixDe;i++){
    // console.log((new Date(parseInt(k))).format());
    k=k+24*60*60*1000;
    a[i]=(new Date(parseInt(k))).format()
    }
    // console.log(a)
     NowTime = new Date().format();
    // var date = new Date(NowTime).getDay();  //判断周几
        // console.log(new Date(a[i]).getDay());
        wDay = a.filter(function(days){
            return (new Date(days).getDay())!=0;
        })
        // console.log(wDay.length) //去掉周日的日期
    edDay = wDay.indexOf(NowTime)+1;
    console.log(wDay.length-edDay)  //还有多少个工作日
    // console.log(wDay)
}

getAll('2016-12-00','2017-01-25');
// console.log(wDay.length-edDay)

// console.log(NowTime)

if (new Date(NowTime).getDay()!=0) {
    $interval(function GetRTime(){
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    var p=0;
    var ingDay;    //今天还剩多少秒
    var ingTime;    //一共还有多少秒
    if (new Date().getTime()-new Date(NowTime+' 00:00:00').getTime()>30600000 && 
        new Date().getTime()-new Date(NowTime+' 00:00:00').getTime()<45000000) {
        ingDay = new Date().getTime()-new Date(NowTime+' 08:30:00').getTime()
    }
    if (new Date().getTime()-new Date(NowTime+' 00:00:00').getTime()>48600000 && 
        new Date().getTime()-new Date(NowTime+' 00:00:00').getTime()<63000000) {
        ingDay = new Date().getTime()-new Date(NowTime+' 09:30:00').getTime()
    }
    ingDay = Math.floor(28800-ingDay/1000);
    ingTime = Math.floor((wDay.length-edDay-1)*28800+ingDay)
    // if(p>0){
    //  p=100-(NowTime.getTime()-StartTime.getTime())/(EndTime.getTime()-StartTime.getTime())*100
    //  p=p.toFixed(2)
    // }else{
    //  p=0;
    // }
    // if(t>=0){
      d=wDay.length-edDay;
      h=Math.floor(ingTime/60/60);
      m=Math.floor(ingTime/60);
      s=Math.floor(ingTime);
      l=Math.floor(new Date().getTime()/1000)%60;
	console.log(l)
      p=(ingTime/1411200*100).toFixed(2)
    // }
    $scope.days = d;
    $scope.hours = h;
    $scope.minutes = m;
    $scope.seconds = s;
    $scope.per = p;
    $scope.percent = {
   'background':'white',  
   'float':'left', 
   'height':'100%',  
   'text-align':'center',  
   'line-height':'150%',
   'width':p+'%' 
    }

    if(l==0){
     $scope.sDays = {
     'font-size': '150px',
     'display':'none',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sHours = {
     'display': '',
     'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sMinutes = {
         'display': 'none',
         'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sSeconds = {
         'display': 'none',
         'font-size': '80px',
        'text-align':'center',
        'margin':'0 auto'
     }
    }
    if(l==30){
     $scope.sDays = {
     'font-size': '150px',
     'display':'none',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sHours = {
     'display': 'none',
     'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sMinutes = {
         'display': '',
         'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sSeconds = {
         'display': 'none',
         'font-size': '80px',
        'text-align':'center',
        'margin':'0 auto'
     }
    }
    if (l==40) {
     $scope.sDays = {
     'font-size': '150px',
     'display':'none',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sHours = {
     'display': 'none',
     'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sMinutes = {
         'display': 'none',
         'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sSeconds = {
         'display': '',
         'font-size': '80px',
        'text-align':'center',
        'margin':'0 auto'
     }
    }
    if (l==50) {
     $scope.sDays = {
     'font-size': '150px',
     'display':'',
     'text-align':'center',
     'margin':'0 auto'
     }
     $scope.sHours = {
     'display': 'none',
     'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sMinutes = {
         'display': 'none',
         'font-size': '100px',
        'text-align':'center',
        'margin':'0 auto'
     }
     $scope.sSeconds = {
         'display': 'none',
         'font-size': '80px',
        'text-align':'center',
        'margin':'0 auto'
     }
    }
// 	if (l==18) {
//         document.location = 'https://shampooed.github.io/angularDaojishi/rili.html'
//     }
    
    },1000);

}
});
