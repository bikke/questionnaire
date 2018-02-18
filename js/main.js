var myApp = angular.module('myapp', [])
  .controller('attendCtrl', function($scope) {
    $scope.group_num = 1;
    $scope.validity = true;
    console.log($scope.validity);
    $scope.tens_place = 0;

    //
    // $scope.Message1 = "text1           ";
    // $scope.Message2 = "text2              ";
    // $scope.Message3 = "text3            ";
    // $scope.Message4 = "text4               "
    // $scope.Message5 = "text5　　　　　 ";
    // $scope.placeholderData1 = $scope.Message1.split("");
    // $scope.placeholderData2 = $scope.Message2.split("");
    // $scope.placeholderData3 = $scope.Message3.split("");
    // $scope.placeholderData4 = $scope.Message4.split("");
    // $scope.placeholderData5 = $scope.Message5.split("");
    // $scope.placeholderIndex = 0;
    // $scope.timesIndex = 1;
    // $scope.placeholder = "";
    // update=function(){
    //   $scope.timeout_job = setTimeout(()=>{
    //     $scope.$apply(() => {
    //       if ($scope.placeholderIndex <= $scope.Message_Data.length) {
    //         $scope.placeholder += $scope.Message_Data[$scope.placeholderIndex];
    //         $scope.placeholderIndex++;
    //       }
    //       if(($scope.placeholderIndex > $scope.Message_Data.length) && ($scope.timesIndex % 5 == 1)){
    //         $scope.timesIndex++;
    //         $scope.placeholderIndex = 0;
    //         $scope.placeholder = "";
    //         $scope.Message_Data = $scope.placeholderData2;
    //       }
    //       if(($scope.placeholderIndex > $scope.Message_Data.length) && ($scope.timesIndex % 5 == 2)){
    //         $scope.timesIndex++;
    //         $scope.placeholderIndex = 0;
    //         $scope.placeholder = "";
    //         $scope.Message_Data = $scope.placeholderData3;
    //       }
    //       if(($scope.placeholderIndex > $scope.Message_Data.length) && ($scope.timesIndex % 5 == 3)){
    //         $scope.timesIndex++;
    //         $scope.placeholderIndex = 0;
    //         $scope.placeholder = "";
    //         $scope.Message_Data = $scope.placeholderData4;
    //       }
    //       if(($scope.placeholderIndex > $scope.Message_Data.length) && ($scope.timesIndex % 5 == 4)){
    //         $scope.timesIndex++;
    //         $scope.placeholderIndex = 0;
    //         $scope.placeholder = "";
    //         $scope.Message_Data = $scope.placeholderData5;
    //       }
    //       if(($scope.placeholderIndex > $scope.Message_Data.length) && ($scope.timesIndex % 5 == 0)){
    //         $scope.timesIndex++;
    //         $scope.placeholderIndex = 0;
    //         $scope.placeholder = "";
    //         $scope.Message_Data = $scope.placeholderData1;
    //       }
    //     });
    //     // console.log($scope.placeholder);
    //     return update();
    //   },70);
    // };
    //
    // $scope.Message_Data = $scope.placeholderData1;//Message_Data初期設定
    // update();// placeholder update 実行!

    $scope.send = function() {
      // clearTimeout($scope.timeout_job);// placeholderの更新の停止
      console.log('ok')
      $('#confirm_Modal').modal('hide');
    }

    //select box
    // $scope.years = [
    //   { key: "H.29(2017)", value: 2017 },
    //   { key: "H.28(2016)", value: 2016 },
    //   { key: "H.27(2015)", value: 2015 },
    //   { key: "H.26(2014)", value: 2014 },
    //   { key: "H.25(2013)", value: 2013 },
    //   { key: "H.24(2012)", value: 2012 },
    //   { key: "H.23(2011)", value: 2011 },
    //   { key: "H.22(2010)", value: 2010 }
    // ];
    //
    // $scope.validity="";
    // //select number
    // $scope.tens_place = 0;
    // // var mt = new MersenneTwister();
    // // $scope.num = mt.nextInt(0, 6) + 1;
    // $scope.num = Math.floor(Math.random() * 5) + 1;
    // console.log('num='+$scope.num);
    //
    // function spin() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(spin, 120);
    // }
    // function spin1() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(spin2, 200);
    // }
    // function spin2() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(spin3, 320);
    // }
    // function spin3() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(spin4, 440);
    // }
    // function spin4() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(spin5, 700);
    // }
    // function spin5() {
    // 	$scope.group_num = Math.floor(Math.random() * 9);
    //   $scope.tens_place = Math.floor(Math.random() * 9);
    // 	timerId = setTimeout(select_num, 1000);
    // }
    // spin();
    // $scope.stop = function() {
    //   setTimeout(()=> {
    //     clearTimeout(timerId);
    //     select_num();
    //   }, 500);//ボタンをクリックしてから0.5秒後に遷移
    // }
    // function select_num() {
      $scope.group_num = $scope.num;
      $scope.validity = true;
      console.log($scope.validity);
      $scope.tens_place = 0;
    // }
  });
