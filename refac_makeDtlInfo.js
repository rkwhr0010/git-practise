const lngeSelectType = "M";

// 라운지 이용현황 상세  HTML 그리기 (그래프오른쪽 데이터)
function makeDtlInfo({
    VST_CUST_CNT = '', 
    VAT_TIME = '', 
    LGNE_TOVRRT = '', 
    DRNK_ORD_PRDC_CNT = '', 
    ORD_CHG_TOVRRT = '', 
    SLNG_AMT = '', 
    PCH_CUST_AMT = ''
} = {}) {

    //값 초기화
    DRNK_ORD_PRDC_CNT = lngeSelectType == 'M' ? ' - ' : DRNK_ORD_PRDC_CNT;

    //지우기
    $('#dtlInfo').children().remove();
    //그리기
    $('#dtlInfo').append(_createLoungeHtml());

    return;
    
    function _createLoungeHtml() {
        const html = [];

        html.push(_createListHtml(`입실객수  :`, `${comma(VST_CUST_CNT)}명`));
        html.push(_createListHtml(`인당 평균 체류시간  :`, `${VAT_TIME}분`));
        html.push(_createListHtml(`라운지 회전율  :`, `${LGNE_TOVRRT}`));
        html.push(_createListHtml(`인당 평균 음료건수  :`, `${comma(DRNK_ORD_PRDC_CNT)}잔`));
        html.push(_createListHtml(`구매율  :`, `${ORD_CHG_TOVRRT}%`));
        html.push(_createListHtml(`구매금액  :`, `${comma(SLNG_AMT)}백만원`));
        html.push(_createListHtml(`객단가  :`, `${comma(PCH_CUST_AMT)}천원`));

        return html.join('\n');
    }

    function _createListHtml(left, right){
        const tag = [];
        tag.push(`<li>`);
        tag.push(`  <span class="lanunge_left">${left}</span>`);
        tag.push(`  <span class="lanunge_right">${right}</span>`);
        tag.push(`</li>`);

        return tag.join('\n');
    }
}

function comma(data){
    return data;
}



const data = { VST_CUST_CNT : '123'
        , VAT_TIME : '22'
        , LGNE_TOVRRT : 'ss'
        , DRNK_ORD_PRDC_CNT : 'bbb'
        , ORD_CHG_TOVRRT : '222'
        , SLNG_AMT : 'hhh'
        , PCH_CUST_AMT : 'aaa' 
        };
console.log(makeDtlInfo(data))