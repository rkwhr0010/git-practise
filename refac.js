
// 라운지 이용현황 상세  HTML 그리기 (그래프오른쪽 데이터)
function makeDtlInfo(rtData){
    let { VST_CUST_CNT = ''
        , VAT_TIME = ''
        , LGNE_TOVRRT = ''
        , DRNK_ORD_PRDC_CNT = ''
        , ORD_CHG_TOVRRT = ''
        , SLNG_AMT = ''
        , PCH_CUST_AMT = '' 
        } = rtData;

    let html ='';
    html += _createTag(`입실객수  :`, `${comma(VST_CUST_CNT)}명`);
    html += _createTag(`인당 평균 체류시간  :`, `${VAT_TIME}분`);
    html += _createTag(`라운지 회전율  :`, `${LGNE_TOVRRT}`);
    html += _createTag(`인당 평균 음료건수  :`, `${lngeSelectType == 'M' ? ' - ' : comma(DRNK_ORD_PRDC_CNT)}잔`);
    html += _createTag(`구매율  :`, `${ORD_CHG_TOVRRT}%`);
    html += _createTag(`구매금액  :`, `${comma(SLNG_AMT)}백만원`);
    html += _createTag(`객단가  :`, `${comma(PCH_CUST_AMT)}천원`);

    $('#dtlInfo').children().remove();
    $('#dtlInfo').append(html);

    return;

    function _createTag(left, right){
        return `<li>
                    <span class="lanunge_left">${left}</span>
                    <span class="lanunge_right">${right}</span>
                </li>`;
    }
}