var _0x3859=['download','help','getElementById','command','keyup','keyCode','preventDefault','ctrlKey','toLowerCase','indexOf','error','open','https://shradhit.com/resume.pdf','clear','cloneNode','display:block','createElement','div','appendChild','innerHTML','<span\x20style\x20=\x20\x22color:#3ffb57\x22>shradhit@subudhi\x20$</span>\x20','push','executed_commands','value','length','scrollingElement','body','scrollTop','scrollHeight','down','startsWith','html','click','#command','focus','about','education','projects','experience','skills','achievements','contact'];(function(_0x1fe3eb,_0x51b3bb){var _0x4923c3=function(_0x37229f){while(--_0x37229f){_0x1fe3eb['push'](_0x1fe3eb['shift']());}};_0x4923c3(++_0x51b3bb);}(_0x3859,0x1c7));var _0x8c9d=function(_0x5c9df2,_0x2f66d1){_0x5c9df2=_0x5c9df2-0x0;var _0x1e76da=_0x3859[_0x5c9df2];return _0x1e76da;};var cmd_list=[];var cmd_index=0x0;var available_cmd=[_0x8c9d('0x0'),_0x8c9d('0x1'),_0x8c9d('0x2'),_0x8c9d('0x3'),_0x8c9d('0x4'),_0x8c9d('0x5'),_0x8c9d('0x6'),_0x8c9d('0x7'),_0x8c9d('0x8'),'clear','ls'];var cmd=document[_0x8c9d('0x9')](_0x8c9d('0xa'));cmd['addEventListener'](_0x8c9d('0xb'),function(_0x37cda5){if(_0x37cda5[_0x8c9d('0xc')]===0xd){_0x37cda5[_0x8c9d('0xd')]();run_command();}else if(_0x37cda5[_0x8c9d('0xc')]===0x26){_0x37cda5[_0x8c9d('0xd')]();cycle_command('up');}else if(_0x37cda5[_0x8c9d('0xc')]===0x28){_0x37cda5['preventDefault']();cycle_command('down');}else if(_0x37cda5['keyCode']===0x20&&_0x37cda5[_0x8c9d('0xe')]){_0x37cda5[_0x8c9d('0xd')]();tab_completion();}});function run_command(){var _0x67137f=document[_0x8c9d('0x9')]('command');var _0x385712=_0x67137f['value'][_0x8c9d('0xf')]();var _0x3ed47b;if(_0x385712!=''){var _0x25844b=document[_0x8c9d('0x9')](_0x385712);if(available_cmd[_0x8c9d('0x10')](_0x385712)<0x0)_0x25844b=document[_0x8c9d('0x9')](_0x8c9d('0x11'));if(_0x385712==_0x8c9d('0x7')){window[_0x8c9d('0x12')](_0x8c9d('0x13'),'_blank');}else if(_0x385712==_0x8c9d('0x14')){clear_console();return;}_0x3ed47b=_0x25844b[_0x8c9d('0x15')](!![]);_0x3ed47b['style']=_0x8c9d('0x16');}var _0x3e11f0=document[_0x8c9d('0x17')](_0x8c9d('0x18'));var _0x4779f0=document[_0x8c9d('0x17')](_0x8c9d('0x18'));_0x3e11f0[_0x8c9d('0x19')](_0x4779f0);_0x4779f0[_0x8c9d('0x1a')]=_0x8c9d('0x1b')+_0x385712;if(_0x385712!=''){_0x3e11f0[_0x8c9d('0x19')](_0x3ed47b);cmd_list[_0x8c9d('0x1c')](_0x385712);}var _0x25844b=document[_0x8c9d('0x9')](_0x8c9d('0x1d'));_0x25844b[_0x8c9d('0x19')](_0x3e11f0);_0x67137f[_0x8c9d('0x1e')]='';cmd_index=cmd_list[_0x8c9d('0x1f')]-0x1;var _0x50f65b=document[_0x8c9d('0x20')]||document[_0x8c9d('0x21')];_0x50f65b[_0x8c9d('0x22')]=_0x50f65b[_0x8c9d('0x23')];}function cycle_command(_0x52b4e0){if(_0x52b4e0==='up'){if(cmd_index>0x0)cmd_index-=0x1;}else if(_0x52b4e0===_0x8c9d('0x24')){if(cmd_index<cmd_list[_0x8c9d('0x1f')]-0x1)cmd_index+=0x1;}var _0x32b9cc=document[_0x8c9d('0x9')](_0x8c9d('0xa'));_0x32b9cc['value']=cmd_list[cmd_index];}function tab_completion(){var _0x32a690=document[_0x8c9d('0x9')](_0x8c9d('0xa'));var _0x25faa4=_0x32a690[_0x8c9d('0x1e')];for(index=0x0;index<available_cmd[_0x8c9d('0x1f')];index++){if(available_cmd[index][_0x8c9d('0x25')](_0x25faa4)){_0x32a690[_0x8c9d('0x1e')]=available_cmd[index];break;}}}function clear_console(){document[_0x8c9d('0x9')]('executed_commands')[_0x8c9d('0x1a')]='';document[_0x8c9d('0x9')](_0x8c9d('0xa'))[_0x8c9d('0x1e')]='';}$(_0x8c9d('0x26'))[_0x8c9d('0x27')](function(){$(_0x8c9d('0x28'))[_0x8c9d('0x29')]();});
