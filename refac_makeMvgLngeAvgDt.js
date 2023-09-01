const jsdom = require('jsdom')
const dom = new jsdom.JSDOM("")
const $ = require('jquery')(dom.window)



function isEmpty(val) {
	if (val == null || val == '' || val == undefined || ( val != null && typeof val == "object" && !Object.keys(val).length )) {
		return true;
	}
	else {
		return false;
	}
}

function isNotEmpty(val) {
	return !isEmpty(val);
}

//mvgLngeTotAvgDt  샘플 데이터
let  mvgLngeTotAvgDt =
[
    {
        "DT_LOW": "18",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230818",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 6,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "19",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230819",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 7,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "20",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230820",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 1,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "21",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230821",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 2,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "22",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230822",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 3,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "23",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230823",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 4,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "24",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230824",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 5,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "25",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230825",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 6,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "26",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230826",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 7,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "27",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230827",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 1,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "28",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230828",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 2,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "29",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230829",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 3,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "30",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230830",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 4,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    },
    {
        "DT_LOW": "31",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230831",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 5,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    }
];


Map = function(){
    this.map = new Object();
   };
   Map.prototype = {
       put : function(key, value){
           this.map[key] = value;
       },
       get : function(key){
           return this.map[key];
       },
       isEmpty : function(key){
        return (this.size() == 0);
       },
       clear : function(){
        for(var prop in this.map){
         delete this.map[prop];
        }
       },
       remove : function(key){
        delete this.map[key];
       },
       keys : function(){
           var keys = new Array();
           for(var prop in this.map){
               keys.push(prop);
           }
           return keys;
       },
       values : function(){
        var values = new Array();
           for(var prop in this.map){
            values.push(this.map[prop]);
           }
           return values;
       },
       size : function(){
         var count = 0;
         for (var prop in this.map) {
           count++;
         }
         return count;
       }
   };

/**
 * 코드 의존성
 */











var lDate = [];
var searchDate = [];
/**
 * 오늘 제외 이전 14일 치 데이터를 그래프로 찍는다.
 */


//점계/AVENUEL/MVG/VIP 별 라운지 이용 현황 조회
function makeMvgLngeAvgDt(type){
    //사이드 이팩트 방지
    const mvgLngeTotAvgDt = [];//JSON.parse(JSON.stringify(mvgLngeTotAvgDt));

    //지우기
    $('#graph_line').children().remove();

    var serData1 = [];
    var serData2 = [];
    var serData3 = [];
    var serData4 = [];
    var serData9 = [];
    var tot      = [];
    lDate        = [];
    var lDate2   = [];
    searchDate   = [];
    var gubun    = [];
    var codeMap  = new Map();
    var dateMap  = new Map();
    var i = 1;

/*
{
        "DT_LOW": "31",
        "STY_TM_MICNT": 0,
        "LGNE_TOVRRT": 0,
        "VST_DT": "20230831",
        "VST_CUST_CNT": 0,
        "PCH_AMT": 0,
        "DT_DAY": 5,
        "ORD_CNT_QTY": 0,
        "PCH_CUST_CNT": 0,
        "GRID_TYPE": "D"
    }
*/

    lDate = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter1(row))
        .map(row => _createDayHtml(row));

    lDate2 = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter1(row))
        .map(row => row['VST_DT']);
        
    searchDate = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter1(row))
        .map(row => row['VST_DT']);

    dateMap = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter1(row))
        .reduce((map, row) => map.push(row['VST_DT'], 0), new Map());


    var i = 1;

    codeMap = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter2(row))
        .filter(row => !isEmpty(row['EXCLL_CUST_LNGE_CD']))
        .reduce((map, row) => {
            map.push(`${row['EXCLL_CUST_LNGE_CD']}, serData${i}`);
            map.push(`serData${i}, ${row['COMN_CD_NM']}`);
            i++;
        }, new Map());

    gubun = mvgLngeTotAvgDt.filter(row => row['GRID_TYPE'] === 'D')
        .filter(row => _filter2(row))
        .filter(row => !isEmpty(row['EXCLL_CUST_LNGE_CD']))
        .map(row => row['EXCLL_CUST_LNGE_CD']);



    _filter1({VST_DT}, lDate2) {
        return !lDate2.includes(VST_DT);
    }

    _filter2({EXCLL_CUST_LNGE_CD}, gubun) {
        return !gubun.includes(EXCLL_CUST_LNGE_CD);
    }


    _createDayHtml({DT_DAY, DT_LOW}){
        switch (Number(DT_DAY)) {
            case 1: //일요일
                return `<div style='color:red;'>${DT_LOW}</div>`;
            case 7: //토요일
                return `<div style='color:blue;'>${DT_LOW}</div>`;
            default:
                return DT_LOW;
        }
    }


    /**
     * 날짜 수집기
     */

    
    console.log(`gubun ===>>  ${gubun}`);
    console.log(`codeMap ===>>  ${JSON.stringify(codeMap)}`);
    console.log(`dateMap ===>>  ${JSON.stringify(dateMap)}`);
    console.log(`searchDate ===>>  ${searchDate}`);
    console.log(`lDate ===>>  ${lDate}`);
    console.log(`lDate2 ===>>  ${lDate2}`);


    return;



    /* 모르겠음
    */
    // 라운지코드가 null 이여도 그래프는 일/월별 0으로 보여주기 위해 추가
    if(codeMap.size() < 1){
        codeMap.put('99', 'serData9');
        codeMap.put('serData9', 'NULL');
        gubun.push("99");
    }

    var lngType = $('input[name=radio_1]:checked').val()
    // 라운지 이용현황 상세 재조회 (그래프오른쪽 데이터)
    searchInfoData(lDate2[lDate2.length-1], lngType);


    var validDt = [];
    var listDt = '';

    $.each(mvgLngeTotAvgDt, function(index, item){
        //14일전 첫일
        if(index == 0){
            listDt = item.VST_DT;
        }
        if(listDt != item.VST_DT){
            if(dateMap.get(listDt) < codeMap.size()){
                $.each(codeMap.values(), function(idx, item1){
                    var tf = $.inArray(item1, validDt);
                    if(tf == -1){
                        if(item1 == 'serData1'){
                            serData1.push(0);
                            validDt.push('serData1');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData2'){
                            serData2.push(0);
                            validDt.push('serData2');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData3'){
                            serData3.push(0);
                            validDt.push('serData3');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData4'){
                            serData4.push(0);
                            validDt.push('serData4');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData9'){
                            serData9.push(0);
                            validDt.push('serData9');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }
                    }
                });
                listDt = item.VST_DT;
                validDt = [];
            }else{
                listDt = item.VST_DT;
                validDt = [];
            }
            validDt.push(codeMap.get(item.EXCLL_CUST_LNGE_CD));
        }else{
             if(dateMap.get(listDt) <= codeMap.size()){
                validDt.push(codeMap.get(item.EXCLL_CUST_LNGE_CD));
            }
        }
        // V : 평균방문객수
        if(type == 'V'){
            if(item.GRID_TYPE == 'D'){
                if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData4'){
                    serData4.push(item.VST_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData3'){
                    serData3.push(item.VST_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData2'){
                    serData2.push(item.VST_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData1'){
                    serData1.push(item.VST_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData9'){
                    serData9.push(item.VST_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }
            }
        // P : 평균구매객수
        }else if(type == 'P'){
            if(item.GRID_TYPE == 'D'){
                if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData4'){
                    serData4.push(item.PCH_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData3'){
                    serData3.push(item.PCH_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData2'){
                    serData2.push(item.PCH_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData1'){
                    serData1.push(item.PCH_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData9'){
                    serData9.push(item.PCH_CUST_CNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }
            }
        // S : 평균체류시간
        }else if(type == 'S'){
            if(item.GRID_TYPE == 'D'){
                if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData4'){
                    serData4.push(item.STY_TM_MICNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData3'){
                    serData3.push(item.STY_TM_MICNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData2'){
                    serData2.push(item.STY_TM_MICNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData1'){
                    serData1.push(item.STY_TM_MICNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData9'){
                    serData9.push(item.STY_TM_MICNT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }
            }
        // L : 평균라운지회전율
        }else if(type == 'L'){
            if(item.GRID_TYPE == 'D'){
                if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData4'){
                    serData4.push(item.LGNE_TOVRRT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData3'){
                    serData3.push(item.LGNE_TOVRRT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData2'){
                    serData2.push(item.LGNE_TOVRRT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData1'){
                    serData1.push(item.LGNE_TOVRRT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData9'){
                    serData9.push(item.LGNE_TOVRRT);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }
            }
        // O : 평균음료주문수
        }else if(type == 'O'){
            if(item.GRID_TYPE == 'D'){
                if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData4'){
                    serData4.push(item.ORD_CNT_QTY);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData3'){
                    serData3.push(item.ORD_CNT_QTY);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData2'){
                    serData2.push(item.ORD_CNT_QTY);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData1'){
                    serData1.push(item.ORD_CNT_QTY);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }else if(codeMap.get(item.EXCLL_CUST_LNGE_CD) == 'serData9'){
                    serData9.push(item.ORD_CNT_QTY);
                    dateMap.put(item.VST_DT, dateMap.get(item.VST_DT)+1);
                }
            }
        }

        if(index == (mvgLngeTotAvgDt.length-1)){
            if(dateMap.get(listDt) < codeMap.size()){
                $.each(codeMap.values(), function(idx, item1){
                    var tf = $.inArray(item1, validDt);
                    if(tf == -1){
                        if(item1 == 'serData1'){
                            serData1.push(0);
                            validDt.push('serData1');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData2'){
                            serData2.push(0);
                            validDt.push('serData2');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData3'){
                            serData3.push(0);
                            validDt.push('serData3');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData4'){
                            serData4.push(0);
                            validDt.push('serData4');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }else if(item1 == 'serData9'){
                            serData9.push(0);
                            validDt.push('serData9');
                            dateMap.put(listDt,dateMap.get(listDt)+1)
                        }
                    }
                });
            }
        }
    });

    if(serData1.length > 0){
        tot.push(serData1);
        $('#lngNm4').show();
        $('#lngNm4').text(codeMap.get('serData1'));
        $('#lngNm4').addClass('type_green');
    }else{
        $('#lngNm4').hide();
    }
    if(serData2.length > 0){
        tot.push(serData2);
        $('#lngNm3').show();
        $('#lngNm3').text(codeMap.get('serData2'));
        $('#lngNm3').addClass('type_sky');
    }else{
        $('#lngNm3').hide();
    }
    if(serData3.length > 0){
        tot.push(serData3);
        $('#lngNm2').show();
        $('#lngNm2').text(codeMap.get('serData3'));
        $('#lngNm2').addClass('type_blue');
    }else{
        $('#lngNm2').hide();
    }
    if(serData4.length > 0){
        tot.push(serData4);
        $('#lngNm1').show();
        $('#lngNm1').text(codeMap.get('serData4'));
        $('#lngNm1').addClass('type_red');
    }else{
        $('#lngNm1').hide();
    }

    if(serData9.length > 0){
        tot.push(serData9);
    }

    if(tot.length > 0){
        /* 라운지 상세 이용 현황 */
        $.jqplot ('graph_line', tot, fn_getLineConfig1());
    }
}



makeMvgLngeAvgDt();







