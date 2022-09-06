let point = document.getElementById('number')

        function CreateTable() {
            let pattern = 0
            let usepoint = point.value
            let flPoint = Math.ceil((usepoint / 8))
            var poz = document.getElementById('space');
            let setpoint = usepoint
            let realUsePoing = 8
            if (usepoint < 8) {
                realUsePoing = usepoint
            }


            // createing table adn inserting into document
            tab = document.createElement('table');
            poz.appendChild(tab);

            for (var i = 0; i < flPoint; i++) {
                // creating row and inserting into document
                var row = tab.insertRow(i);

                for (var j = 0; j < realUsePoing; j++) {
                    // creating cells and fill with data (numbers)
                    if (pattern % 2 == 1) {
                        var cell = row.insertCell(j);
                        if (j % 2 == 0) {
                            cell.style.backgroundColor = 'white';
                            cell.style.color = 'white';
                            cell.style.height = '50px';
                            cell.style.width = '50px';
                        } else {
                            cell.style.backgroundColor = 'black';
                            cell.style.color = 'white';
                            cell.style.height = '50px';
                            cell.style.width = '50px';
                        }
                    } else {
                        var cell = row.insertCell(j);
                        if (j % 2 == 0) {
                            cell.style.backgroundColor = 'black';
                            cell.style.color = 'white';
                            cell.style.height = '50px';
                            cell.style.width = '50px';
                        } else {
                            cell.style.backgroundColor = 'white';
                            cell.style.color = 'white';
                            cell.style.height = '50px';
                            cell.style.width = '50px';
                        }
                    }

                };
                usepoint -= 8
                if (usepoint >= 8) {
                    realUsePoing = 8
                }
                else {
                    realUsePoing = usepoint
                }

                pattern += 1
            };

        }
