
// 
// safe basic way of doing things no problems
//implement expermenting with sucessful code to make it work nicely with system, the desired mode
//  unknown new methods but unknown results
// ,danger code that works but there are setbacks
// prevent, when you dont want that area in your api to run



module.exports = function(node_mode = 'safe',codes){

						async function node_mode_handler(mode_number){


							if(typeof(codes[mode_number]) == "function"){


								return codes[mode_number]


							}


							else{


								console.log("didnt get a function change the node name or put a function in the appropriate spot in the array?")
								console.log("for the first arg type 'safe' ")


							}


						}
						switch(node_mode){
							case 'safe':
								return node_mode_handler(0)
								break;					

							case 'unknown':
								return node_mode_handler(1)								
								break;	

							case 'implement':
								return node_mode_handler(2)	
								break;

							case 'danger':	
								return node_mode_handler(3)
								break

							case 'prevent':
							    //if we need code that is preventable we will write for the future
								break;	
							
							default:

						}	
					
			}