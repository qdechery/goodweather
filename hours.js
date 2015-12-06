$("#current_temp").html('&nbsp' + Math.round(json.currently.apparentTemperature)+ '&#176;F');
					$("#current_summary").html(json.currently.summary);
					$("#current_temp").attr("data-icon",icons[json.currently.icon]);
					
					//current time display
					var now = new Date(),
						day = now.getDate(),
						weekdays = { 0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday' },
						weekday = weekdays[now.getDay()],
						months = { 0:'Jan.', 1:'Feb.', 2:'Mar.', 3:'Apr.', 4:'May', 5:'Jun.', 6:'Jul.', 7:'Aug.', 8:'Sep.', 9:'Oct.', 10:'Nov.', 11:'Dec.' },
						month = months[now.getMonth()],
						dates = { 1:'1<sup>st</sup>', 2:'2<sup>nd</sup>', 3:'3<sup>rd</sup>', 4:'4<sup>th</sup>', 5:'5<sup>th</sup>', 6:'6<sup>th</sup>', 7:'7<sup>th</sup>', 8:'8<sup>th</sup>', 9:'9<sup>th</sup>', 10:'10<sup>th</sup>', 11:'11<sup>th</sup>', 12:'12<sup>th</sup>', 13:'13<sup>th</sup>', 14:'14<sup>th</sup>', 15:'15<sup>th</sup>', 16:'16<sup>th</sup>', 17:'17<sup>th</sup>', 18:'18<sup>th</sup>', 19:'19<sup>th</sup>', 20:'20<sup>th</sup>', 21:'21<sup>st</sup>', 22:'22<sup>nd</sup>', 23:'23<sup>rd</sup>', 24:'24<sup>th</sup>', 25:'25<sup>th</sup>', 26:'26<sup>th</sup>', 27:'27<sup>th</sup>', 28:'28<sup>th</sup>', 29:'29<sup>th</sup>', 30:'30<sup>th</sup>', 31:'31<sup>st</sup>' },
						date = dates[now.getDate()],
						year = now.getFullYear();
						// curHour = now.getHours(),
						// curMin = now.getMinutes();

					$('#hourlyData').html("<i>"+weekday+", "+month+" "+date+", "+year+"<br/><i>"+"</i>");

					// plusOne
						var	plusOneHr = new Date().getHours()+1+":00",
						plusOneTemp = json.hourly.data[1].apparentTemperature,
						plusOneIcon = icons[json.hourly.data[1].icon],
						plusOnePrecip = json.hourly.data[1].precipProbability * 100;

						$('#plusOne').html(plusOneHr+'<br/>'+ Math.round(plusOneTemp)+ '&#176;F<br/>');
						$('#precipOne').html('Rain:'+plusOnePrecip+'%');
						$('#hour-one-icon').attr("data-icon",plusOneIcon);
						
					// plusTwo
						var	plusTwoHr = new Date().getHours()+2+":00",
						plusTwoTemp = json.hourly.data[2].apparentTemperature,
						plusTwoIcon = icons[json.hourly.data[2].icon];
						plusTwoPrecip = json.hourly.data[2].precipProbability * 100;

						$('#plusTwo').html(plusTwoHr+'<br/>'+ Math.round(plusTwoTemp)+ '&#176;F<br/>');
						$('#precipTwo').html('Rain:'+plusTwoPrecip+'%');
						$('#hour-two-icon').attr("data-icon",plusTwoIcon);

					// plusThree
						var	plusThreeHr = new Date().getHours()+3+":00",
						plusThreeTemp = json.hourly.data[3].apparentTemperature,
						plusThreeIcon = icons[json.hourly.data[3].icon];
						plusThreePrecip = json.hourly.data[3].precipProbability * 100;

						$('#plusThree').html(plusThreeHr+'<br/>'+ Math.round(plusThreeTemp)+ '&#176;F<br/>');
						$('#precipThree').html('Rain:'+plusThreePrecip+'%');
						$('#hour-three-icon').attr("data-icon",plusThreeIcon);

					// plusFour
						var	plusFourHr = new Date().getHours()+4+":00",
						plusFourTemp = json.hourly.data[4].apparentTemperature,
						plusFourIcon = icons[json.hourly.data[4].icon];
						plusFourPrecip = json.hourly.data[4].precipProbability * 100;

						$('#plusFour').html(plusFourHr+'<br/>'+ Math.round(plusFourTemp)+ '&#176;F');
						$('#precipFour').html('Rain:'+plusFourPrecip+'%');
						$('#hour-four-icon').attr("data-icon",plusFourIcon);

					// plusFive
						var	plusFiveHr = new Date().getHours()+5+":00",
						plusFiveTemp = json.hourly.data[5].apparentTemperature,
						plusFiveIcon = icons[json.hourly.data[5].icon];
						plusFivePrecip = json.hourly.data[5].precipProbability * 100;

						$('#plusFive').html(plusFiveHr+'<br/>'+ Math.round(plusFiveTemp)+ '&#176;F');
						$('#precipFive').html('Rain:'+plusFivePrecip+'%');
						$('#hour-five-icon').attr("data-icon",plusFiveIcon);

					// plusSix
						var	plusSixHr = new Date().getHours()+6+":00",
						plusSixTemp = json.hourly.data[6].apparentTemperature,
						plusSixIcon = icons[json.hourly.data[6].icon];
						plusSixPrecip = json.hourly.data[6].precipProbability * 100;

						$('#plusSix').html(plusSixHr+'<br/>'+ Math.round(plusSixTemp)+ '&#176;F');
						$('#precipSix').html('Rain:'+plusSixPrecip+'%');
						$('#hour-six-icon').attr("data-icon",plusSixIcon);

					// plusSeven
						var	plusSevenHr = new Date().getHours()+7+":00",
						plusSevenTemp = json.hourly.data[7].apparentTemperature,
						plusSevenIcon = icons[json.hourly.data[7].icon];
						plusSevenPrecip = json.hourly.data[7].precipProbability * 100;

						$('#plusSeven').html(plusSevenHr+'<br/>'+ Math.round(plusSevenTemp)+ '&#176;F');
						$('#precipSeven').html('Rain:'+plusSevenPrecip+'%');
						$('#hour-seven-icon').attr("data-icon",plusSevenIcon);

					// plusEight
						var	plusEightHr = new Date().getHours()+8+":00",
						plusEightTemp = json.hourly.data[8].apparentTemperature,
						plusEightIcon = icons[json.hourly.data[8].icon];
						plusEightPrecip = json.hourly.data[8].precipProbability * 100;
						
						$('#plusEight').html(plusEightHr+'<br/>'+ Math.round(plusEightTemp)+ '&#176;F');
						$('#precipEight').html('Rain:'+plusEightPrecip+'%');
						$('#hour-eight-icon').attr("data-icon",plusEightIcon);

					// plusNine
						var	plusNineHr = new Date().getHours()+9+":00",
						plusNineTemp = json.hourly.data[9].apparentTemperature,
						plusNineIcon = icons[json.hourly.data[9].icon];
						plusNinePrecip = json.hourly.data[9].precipProbability * 100;

						$('#plusNine').html(plusNineHr+'<br/>'+ Math.round(plusNineTemp)+ '&#176;F');
						$('#precipNine').html('Rain:'+plusNinePrecip+'%');
						$('#hour-nine-icon').attr("data-icon",plusNineIcon);

					// plusTen
						var	plusTenHr = new Date().getHours()+10+":00",
						plusTenTemp = json.hourly.data[10].apparentTemperature,
						plusTenIcon = icons[json.hourly.data[10].icon];
						plusTenPrecip = json.hourly.data[10].precipProbability * 100;

						$('#plusTen').html(plusTenHr+'<br/>'+ Math.round(plusTenTemp)+ '&#176;F');
						$('#precipTen').html('Rain:'+plusTenPrecip+'%');
						$('#hour-Ten-icon').attr("data-icon",plusTenIcon);


					console.log(json.hourly);
