const jsdom = require('jsdom')
const dom = new jsdom.JSDOM("")
const $ = require('jquery')(dom.window)

//VIP & MVG 고객 수 현황 조회 후 콜백 (화면에 데이터 세팅)
function makeMvgCnt2(dataArr) {
    //사본 사용
    const dataArrCopy = JSON.parse(JSON.stringify(dataArr));
    //상수 정의
    const AVE_B = 'aveB';
    const AVE = 'ave';
    const AVE_G1 = 'aveG1';
    
    //집계
    const aveBTot = _calculateTot(dataArrCopy, AVE_B); 	// AVE-B 현황(당점)
    const aveTot = _calculateTot(dataArrCopy, AVE); // AVE 현황(당점)
    const aveG1Tot = _calculateTot(dataArrCopy, AVE_G1);  // AVE-G1 현황(당점)
    const totTot = aveBTot + aveTot + aveG1Tot; // 전사 합계

    //HTML 태그 생성
    let aveBHtml = _createAveBodyHtml(dataArrCopy, AVE_B);// AVENUEL현황 1
    let aveHtml = _createAveBodyHtml(dataArrCopy, AVE);// AVENUEL현황 2
    let aveG1Html = _createAveBodyHtml(dataArrCopy, AVE_G1);// GREEN/ PRE 현황(당점)

    //HTML 태그 하단 합계 추가
    aveBHtml += '\n' + _createListHtml('AVE-B 합계', comma(_formatingNumber(aveBTot)));
    aveHtml += '\n' + _createListHtml('AVE 합계', comma(_formatingNumber(aveTot)));
    aveG1Html += '\n' + _createListHtml('AVE-G1 합계', comma(_formatingNumber(aveG1Tot)));

    //"우수고객수 현황" 오른쪽 집계 생성
    const branchType = $('#str_cd').val() == '0000' ? '전사' : '당점';
    const titleHtml = ` (${branchType}) : ${comma(_formatingNumber(totTot))}명`;

    //랜더링
    $('#MvgA').html(aveBHtml);
    $('#MvgM').html(aveHtml);
    $('#MvgV').html(aveG1Html);
    $('#title3Level').html(titleHtml);

    console.log(aveBHtml);
    console.log(aveHtml);
    console.log(aveG1Html);
    console.log(titleHtml);

    return;

    function _calculateTot(dataArrCopy, aveGrade) {
        return dataArrCopy.filter(data => _filterAbeType(data, aveGrade))
            .map(data => data['CNT'])
            .map(count => count === '-' ? 0 : Number(count))
            .reduce((sum, val) => sum + val, 0);
    }

    function _createAveBodyHtml(dataArrCopy, aveGrade) {
        return dataArrCopy.filter(data => _filterAbeType(data, aveGrade))
            .map(data => _createListHtmlWithObject(data))
            .join('\n');
    }

    function _createListHtmlWithObject({EXCLL_CUST_GRDE_NM, CNT}) {
        return _createListHtml(EXCLL_CUST_GRDE_NM, CNT);
    }

    function _createListHtml(name, count) {
        const html = [];

        html.push(`<li>`);
        html.push(` <strong>${name}</strong>`);
        html.push(` <em>${comma(count)}명</em>`);
        html.push(`</li>`);

        return html.join("\n");
    }

    //고객 유형에 맞는 조건식을 반환한다.
    //변동 가능성이 매우 높은 코드 뭉치
    function _filterAbeType({
        EXCLL_CUST_GRDE_CD = '',
        EXCLL_CUST_PGM_CD = '',
        EXCLL_CUST_TP_CD = '',
    } = {}, aveTypeName) {
        switch (aveTypeName) {
            case AVE_B:
                return EXCLL_CUST_GRDE_CD.startsWith('1')
                    && EXCLL_CUST_PGM_CD == '1'
                    && EXCLL_CUST_TP_CD == '2';
            case AVE:
                return EXCLL_CUST_GRDE_CD.startsWith('2')
                    && EXCLL_CUST_PGM_CD == '1'
                    && EXCLL_CUST_TP_CD == '2';
            case AVE_G1:
                return EXCLL_CUST_PGM_CD == '3' //괄호 주의 독립조건
                    || (EXCLL_CUST_GRDE_CD.startsWith('5')
                        && EXCLL_CUST_GRDE_CD != '57'
                        && EXCLL_CUST_GRDE_CD != '58'
                        && EXCLL_CUST_PGM_CD == '1'
                        && EXCLL_CUST_TP_CD == '2');
            default:
                throw new Error(`집계할 수 없는 등급 '${aveTypeName}' 확인 됐습니다.`)
        }
    }
    function _formatingNumber(number) {
        return !Number.isFinite(number) ? '-' : number;
    }
}

const data = { "mvgGradeCnt": { "list": [{ "EXCLL_CUST_GRDE_CD": "19", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-BLACK", "CNT": "9", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "21", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-EMERALD", "CNT": "5", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "2A", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-PURPLE1", "CNT": "4", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "22", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-PURPLE2", "CNT": "1", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "2B", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-PURPLE3", "CNT": "2", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "23", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-PURPLE4", "CNT": "5", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "24", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-ORANGE", "CNT": "8", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "5A", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-GREEN1", "CNT": "5", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "51", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-GREEN2", "CNT": "3", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "52", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "AVE-GREEN3", "CNT": "7", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "58", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "GREEN-P 면세", "CNT": "3", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "57", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "GREEN-P 마트", "CNT": "7", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "68", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "GREEN-P 홈쇼핑", "CNT": "3", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "97", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "11111111112222222222333", "CNT": "-", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "98", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "aaaaaaaaaabbbbbb한글", "CNT": "-", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "7D", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "PRE-ORANGE111", "CNT": "-", "EXCLL_CUST_TP_CD": "2" }, { "EXCLL_CUST_GRDE_CD": "99", "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_GRDE_NM": "한글로이렇게asdbasc", "CNT": "-", "EXCLL_CUST_TP_CD": "2" }] }, "onlineExcllCustCnt": { "list": [{ "ELTTE_MBR_GRDE_CD": "01", "CNT": 3, "ELTTE_MBR_GRDE_NM": "ACE" }, { "ELTTE_MBR_GRDE_CD": "03", "CNT": 2, "ELTTE_MBR_GRDE_NM": "GOLD" }, { "ELTTE_MBR_GRDE_CD": "04", "CNT": 0, "ELTTE_MBR_GRDE_NM": "VIP" }, { "ELTTE_MBR_GRDE_CD": "05", "CNT": 2, "ELTTE_MBR_GRDE_NM": "MVG" }] }, "mvgGradeNm": { "list": [{ "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_TP_CD": "1", "EXCLL_CUST_TP_NM": "AVENUEL" }, { "EXCLL_CUST_PGM_CD": "1", "EXCLL_CUST_TP_CD": "2", "EXCLL_CUST_TP_NM": "MVG" }] }, "RESULT": "S" };
// console.log(data.mvgGradeCnt.list);
function comma(d) {
    return d;
}

makeMvgCnt2(data.mvgGradeCnt.list);

