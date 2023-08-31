//미완
// 작년 및 올해 라운지 총 이용 건수 조회 후 콜백  (화면에 데이터 세팅)
function makeLngeCnt(data){
    var VST_CUST_CNT  = 0;
    var ORD_CNT_QTY   = 0;
    var LGNE_TOVRRT   = 0;
    var STY_TM_MICNT  = 0;
    var PCH_CUST_CNT  = 0;
    var VST_CUST_CNT1 = 0;
    var ORD_CNT_QTY1  = 0;
    var LGNE_TOVRRT1  = 0;
    var STY_TM_MICNT1 = 0;
    var PCH_CUST_CNT1 = 0;

    var sss = [];
    sss.filter(row => row['TYPE'] === 'NEW').map(row => row['VST_CUST_CNT']).reduce((sum, val) => sum + val);

    $.each(data, function(index, item){
        if(item.TYPE == 'NEW'){
            VST_CUST_CNT = item.VST_CUST_CNT;    // 방문고객수
            ORD_CNT_QTY  = item.ORD_CNT_QTY;     // 주문건수
            LGNE_TOVRRT  = item.LGNE_TOVRRT;     // 라운지회전율
            STY_TM_MICNT = item.STY_TM_MICNT;    // 평균체류시간
            PCH_CUST_CNT = item.PCH_CUST_CNT;    // 구매고객건수
        }
        if(item.TYPE == 'OLD'){
            VST_CUST_CNT1 = item.VST_CUST_CNT;   // 방문고객수
            ORD_CNT_QTY1  = item.ORD_CNT_QTY;    // 주문건수
            LGNE_TOVRRT1  = item.LGNE_TOVRRT;    // 라운지회전율
            STY_TM_MICNT1 = item.STY_TM_MICNT;   // 평균체류시간
            PCH_CUST_CNT1 = item.PCH_CUST_CNT;   // 구매고객건수
        }
    });

     VST_CUST_CNT1 = (Number(VST_CUST_CNT)-Number(VST_CUST_CNT1)) > 0 ? '+'+comma(Number(VST_CUST_CNT)-Number(VST_CUST_CNT1)) : (comma(Number(VST_CUST_CNT)-Number(VST_CUST_CNT1))+'').replace("-","▲ ");
     ORD_CNT_QTY1  = (Number(ORD_CNT_QTY)-Number(ORD_CNT_QTY1)) > 0 ?   '+'+comma(Number(ORD_CNT_QTY)-Number(ORD_CNT_QTY1))   : (comma(Number(ORD_CNT_QTY)-Number(ORD_CNT_QTY1)+'').replace("-","▲ "));
     LGNE_TOVRRT1  = (Number(LGNE_TOVRRT)-Number(LGNE_TOVRRT1)) > 0 ?   '+'+comma(Number(LGNE_TOVRRT)-Number(LGNE_TOVRRT1))   : (comma(Number(LGNE_TOVRRT)-Number(LGNE_TOVRRT1))+'').replace("-","▲ ");
     STY_TM_MICNT1 = (Number(STY_TM_MICNT)-Number(STY_TM_MICNT1)) > 0 ? '+'+comma(Number(STY_TM_MICNT)-Number(STY_TM_MICNT1)) : (comma(Number(STY_TM_MICNT)-Number(STY_TM_MICNT1))+'').replace("-","▲ ");
     PCH_CUST_CNT1 = (Number(PCH_CUST_CNT)-Number(PCH_CUST_CNT1)) > 0 ? '+'+comma(Number(PCH_CUST_CNT)-Number(PCH_CUST_CNT1)) : (comma(Number(PCH_CUST_CNT)-Number(PCH_CUST_CNT1))+'').replace("-","▲ ");

     $('#vcc').text(comma(VST_CUST_CNT)+'명');
     $('#pcc').text(comma(PCH_CUST_CNT)+'명');
     $('#stm').text(comma(STY_TM_MICNT)+'분');
     $('#lngt').text(comma(LGNE_TOVRRT));
     $('#ocq').text(comma(ORD_CNT_QTY)+'잔');

     // 초기화
     $('#vcc1').text(' ');
     $('#pcc1').text(' ');
     $('#stm1').text(' ');
     $('#lngt1').text(' ');
     $('#ocq1').text(' ');

    // 전사가 아닐 경우에만 대비증감 세팅
    if (mstrCd != '' && mstrCd != '0000') {
        $('#vcc1').text('('+(VST_CUST_CNT1)+'명)');
        $('#pcc1').text('('+(PCH_CUST_CNT1)+'명)');
        $('#stm1').text('('+(STY_TM_MICNT1)+'분)');
        $('#lngt1').text('('+(LGNE_TOVRRT1)+')');
        $('#ocq1').text('('+(ORD_CNT_QTY1)+'잔)');
    }
}