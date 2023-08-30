function makeMvgLngeAvgDt(type){
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

    $.each(mvgLngeTotAvgDt, function(index, item){
        if(item.GRID_TYPE == 'D'){
            var tf  = $.inArray(item.VST_DT, lDate2);
            var tf1 = $.inArray(item.EXCLL_CUST_LNGE_CD, gubun);
            if(tf < 0 ){
                if(item.DT_DAY == "1"){
                    lDate.push("<div style='color:red;'>" + item.DT_LOW + "</div>");
                } else if(item.DT_DAY == "7"){
                    lDate.push("<div style='color:blue;'>" + item.DT_LOW + "</div>");
                } else{
                    lDate.push(item.DT_LOW);
                }

                lDate2.push(item.VST_DT);
                searchDate.push(item.VST_DT);
                dateMap.put(item.VST_DT, 0);
            }
            if(tf1 < 0 && item.EXCLL_CUST_LNGE_CD != undefined && item.EXCLL_CUST_LNGE_CD != 'undefined' && item.EXCLL_CUST_LNGE_CD != '' ){
                codeMap.put(item.EXCLL_CUST_LNGE_CD, 'serData'+i);
                codeMap.put('serData'+i, item.COMN_CD_NM);
                gubun.push(item.EXCLL_CUST_LNGE_CD);
                i++;
            }
        }
    })

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
