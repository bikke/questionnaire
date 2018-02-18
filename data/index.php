<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Confirm Page</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
  </head>

  <body style="background-color:white;">
    <div class="contents">
      <div class="text-left">
        <h2>結果発表</h2>
        <?php
        // CSV ファイルを読み込み、$data配列に格納
        $handle = fopen("utf.csv", "r");
        while (($row = fgetcsv($handle, 1000, ",")) !== FALSE) {
          // $data[] = array( 'name'=>$row[0], 'year'=>$row[1], 'att'=>$row[2], 'gr'=>$row[3], 'mess'=>$row[4] );
          $data[] = array( 'q1'=>$row[0], 'q2'=>$row[1] );
        }
        fclose($handle);
        // 列方向の配列を得る
        foreach ($data as $key => $row) {
          $q1[$key] = $row['q1'];
          $q2[$key] = $row['q2'];

        }
        // array_multisort($year, SORT_ASC, $name, SORT_ASC, $att, SORT_ASC, $gr, SOAT_ASC, $mess, SORT_ASC, $data);
        // echo "<table class='table'>";
        // echo "<tr><th>Year</th><th>Name</th><th>Attend</th><th>Group</th><th>Comment</th> </tr>";
        $q1_a=0;$q1_b=0;
        $q2_a=0;$q2_b=0;

        for( $i=0 ; $i<count( $data ) ; $i++ ) {
          // echo "$q1[$i]</br>\n";
          if($q1[$i]==="a") {
            $q1_a+=1;
          } else {
            $q1_b+=1;
          }
          if($q2[$i]==="a") {
            $q2_a+=1;
          } else {
            $q2_b+=1;
          }
          // if($year[$i]=="number:2017"){
          //   // echo "<tr style='background-color: #99cc00'>$year[$i] $name[$i] $att[$i] $mess[$i]</tr></br>\n";
          //   echo "<tr style='background-color: #f7fafd; '><td>1</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2016"){
          //   echo "<tr style='background-color: #edf4fc; '><td>2</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2015"){
          //   echo "<tr style='background-color: #dceaf8; '><td>3</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2014"){
          //   echo "<tr style='background-color: #b8d5f1; '><td>4</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2013"){
          //   echo "<tr style='background-color: #95bfea; '><td>5</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2012"){
          //   echo "<tr style='background-color: #72aae2; '><td>6</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2011"){
          //   echo "<tr style='background-color: #4e95dc; '><td>7</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
          // else if($year[$i]=="number:2010"){
          //   echo "<tr style='background-color: #4e95dc; '><td>8</td> <td>$name[$i]</td> <td>$att[$i]</td> <td>$gr[$i]</td> <td>$mess[$i]</td></tr></br>\n";
          // }
    //      echo "$year[$i] $name[$i] $att[$i] $mess[$i]<br>\n";
        }
        // echo "</table>";
        ?>

        <p>合計<?php echo $i; ?>人．</p><br>
        <div class="text-center">
          <table class='table'>
            <tr style='background-color: #dceaf8; '><td>Q1</td><td>aの人数</td> <td>bの人数</td> <td>aの割合</td></tr></br>
            <tr style='background-color: #f7fafd; '><td>　</td><td><?php echo $q1_a; ?></td> <td><?php echo $q1_b; ?></td> <td><?php echo $q1_a/$i; ?></td></tr></br>
            <tr style='background-color: #dceaf8; '><td>Q1</td><td>cの人数</td> <td>dの人数</td> <td>cの割合</td></tr></br>
            <tr style='background-color: #f7fafd; '><td>　</td><td><?php echo $q2_a; ?></td> <td><?php echo $q2_b; ?></td> <td><?php echo $q2_a/$i; ?></td></tr></br>
          </table>
        </div>

      </div>
    </div>

  </body>
  <script type="text/javascript" src="../js/bootstrap.min.js"></script>
</html>
