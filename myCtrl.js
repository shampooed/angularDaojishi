var app = angular.module('app',[]);
app.controller('myCtrl',function($scope,$interval){
		$scope.sDays = {
    	'font-size': '150px',
    	'display':''
    	};
    	$scope.sHours = {
    	'display': 'none',
    	'font-size': '100px'
    	};
		$scope.sMinutes = {
			'display': 'none',
			'font-size': '100px'
		};
		$scope.sSeconds = {
			'display': 'none',
			'font-size': '80px'
		};
	$interval(function GetRTime() {
	var p = 0.00000000001;
    var EndTime= new Date('2017/01/26 08:30:00');
    var NowTime = new Date();
    var StartTime = new Date('2016/12/01 08:30:00')
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(p>0){
    	p=100-(NowTime.getTime()-StartTime.getTime())/(EndTime.getTime()-StartTime.getTime())*100
    	p=p.toFixed(2)
    }else{
    	p=0;
    }
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60);
      m=Math.floor(t/1000/60);
      s=Math.floor(t/1000);
      l=Math.floor(t/1000%60);
    }
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

    if(l==30){
    	$scope.sDays = {
    	'font-size': '150px',
    	'display':'none'
    	}
    	$scope.sHours = {
    	'display': '',
    	'font-size': '100px'
    	}
		$scope.sMinutes = {
			'display': 'none',
			'font-size': '100px'
		}
		$scope.sSeconds = {
			'display': 'none',
			'font-size': '80px'
		}
	}
    if(l==20){
    	$scope.sDays = {
    	'font-size': '150px',
    	'display':'none'
    	}
    	$scope.sHours = {
    	'display': 'none',
    	'font-size': '100px'
    	}
		$scope.sMinutes = {
			'display': '',
			'font-size': '100px'
		}
		$scope.sSeconds = {
			'display': 'none',
			'font-size': '80px'
		}
	}
    if (l==10) {
    	$scope.sDays = {
    	'font-size': '150px',
    	'display':'none'
    	}
    	$scope.sHours = {
    	'display': 'none',
    	'font-size': '100px'
    	}
		$scope.sMinutes = {
			'display': 'none',
			'font-size': '100px'
		}
		$scope.sSeconds = {
			'display': '',
			'font-size': '80px'
		}
    }
    if (l==0) {
    	$scope.sDays = {
    	'font-size': '150px',
    	'display':''
    	}
    	$scope.sHours = {
    	'display': 'none',
    	'font-size': '100px'
    	}
		$scope.sMinutes = {
			'display': 'none',
			'font-size': '100px'
		}
		$scope.sSeconds = {
			'display': 'none',
			'font-size': '80px'
		}
    }
	},1000);

 });
