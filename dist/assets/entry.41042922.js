import{bx as s}from"./index.5e357d2b.js";const r={refresh_token:"Refresh token",site_id:"Site id",root_folder_path:"Root folder path",regions:{global:"Global",cn:"Cn",us:"Us",de:"De"},client_id:"Client id",client_secret:"Client secret",redirect_uri:"Redirect uri",region:"Region",is_sharepoint:"Is sharepoint"},a={project_id:"Project id",root_folder_id:"Root folder id",order_directions:{Asc:"Asc",Desc:"Desc"},region:"Region",cookie:"Cookie",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",regions:{china:"China",international:"International"},order_by:"Order by"},n={operator_name:"Operator name",operator_password:"Operator password",custom_host:"Custom host",sign_url_expire:"Sign url expire",root_folder_path:"Root folder path",bucket:"Bucket",endpoint:"Endpoint"},i={access_token:"Access token",project_id:"Project id",root_folder_id:"Root folder id",order_by:"Order by",order_bys:{title:"Title",size:"Size",updated_at:"Updated at"},order_desc:"Order desc"},d={root_folder_id:"Root folder id",username:"Username",password:"Password"},c={root_folder_path:"Root folder path",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},l={download_apis:{official:"Official",crack:"Crack"},refresh_token:"Refresh token",root_folder_path:"Root folder path",order_by:"Order by",order_bys:{name:"Name",time:"Time",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},download_api:"Download api",client_id:"Client id",client_secret:"Client secret"},_={root_folder_id:"Root folder id",username:"Username",password:"Password",captcha_token:"Captcha token"},p={Teambition:"Teambition",Thunder:"Thunder",Quark:"Quark",USS:"USS",Onedrive:"Onedrive",BaiduNetdisk:"BaiduNetdisk",YandexDisk:"YandexDisk",FTP:"FTP",PikPak:"PikPak",Aliyundrive:"Aliyundrive","139Yun":"139Yun",WebDav:"WebDav",MediaTrack:"MediaTrack",GoogleDrive:"GoogleDrive",SFTP:"SFTP",Virtual:"Virtual",S3:"S3",ThunderExpert:"ThunderExpert","123Pan":"123Pan","189Cloud":"189Cloud",Local:"Local","189CloudPC":"189CloudPC"},u={"username-tips":"login type is user,this is required",password:"Password",timestamp:"Timestamp",client_secret:"Client secret",user_agent:"User agent",login_types:{user:"User",refresh_token:"Refresh token"},sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},"refresh_token-tips":"login type is refresh_token,this is required",captcha_sign:"Captcha sign",captcha_token:"Captcha token",package_name:"Package name",root_folder_id:"Root folder id",username:"Username","password-tips":"login type is user,this is required",refresh_token:"Refresh token",algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required","timestamp-tips":"sign type is captcha_sign,this is required",client_id:"Client id",download_user_agent:"Download user agent",login_type:"Login type",sign_type:"Sign type","captcha_sign-tips":"sign type is captcha_sign,this is required",device_id:"Device id",client_version:"Client version"},m={client_secret:"Client secret",refresh_token:"Refresh token",order_by:"Order by",order_bys:{name:"Name",path:"Path",created:"Created",modified:"Modified",size:"Size"},order_direction:"Order direction",order_directions:{desc:"Desc",asc:"Asc"},root_folder_path:"Root folder path",client_id:"Client id"},g={root_folder_path:"Root folder path",num_file:"Num file",num_folder:"Num folder",max_file_size:"Max file size",min_file_size:"Min file size"},h={root_folder_id:"Root folder id",refresh_token:"Refresh token",order_by:"Order by",order_bys:{size:"Size",updated_at:"Updated at",created_at:"Created at",name:"Name"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload"},f={root_folder_id:"Root folder id",order_by:"Order by",order_bys:{file_type:"File type",file_name:"File name",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},cookie:"Cookie"},y={password:"Password",root_folder_path:"Root folder path",address:"Address",username:"Username"},w={"order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},client_id:"Client id",client_secret:"Client secret",root_folder_id:"Root folder id",refresh_token:"Refresh token",order_by:"Order by"},k={root_folder_path:"Root folder path",address:"Address",username:"Username",private_key:"Private key",password:"Password"},b={bucket:"Bucket",endpoint:"Endpoint",custom_host:"Custom host",placeholder:"Placeholder",force_path_style:"Force path style",root_folder_path:"Root folder path",region:"Region",access_key_id:"Access key id",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"}},v={address:"Address",username:"Username",password:"Password",root_folder_path:"Root folder path",vendor:"Vendor",vendors:{sharepoint:"Sharepoint",other:"Other"}},C={Onedrive:r,Teambition:a,USS:n,MediaTrack:i,PikPak:d,Local:c,BaiduNetdisk:l,Thunder:_,drivers:p,ThunderExpert:u,YandexDisk:m,Virtual:g,"189CloudPC":{order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",type:"Type",rapid_upload:"Rapid upload",username:"Username",password:"Password",validate_code:"Validate code",order_by:"Order by",root_folder_id:"Root folder id",order_directions:{asc:"Asc",desc:"Desc"},types:{personal:"Personal",family:"Family"},family_id:"Family id"},Aliyundrive:h,Quark:f,FTP:y,"189Cloud":{root_folder_id:"Root folder id",username:"Username",password:"Password"},GoogleDrive:w,SFTP:k,"139Yun":{account:"Account",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{personal:"Personal",family:"Family"},cloud_id:"Cloud id"},S3:b,WebDav:v,"123Pan":{order_by:"Order by",order_bys:{name:"Name",fileId:"FileId",updateAt:"UpdateAt",createAt:"CreateAt"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username",password:"Password"}},P="Refresh",S="Add",A="Edit",R="Save",x="Update",D="Copied",T="Deleted successfully",O="Saved successfully",U="Updated successfully",F="Choose",z="Confirm",j="Cancel",L="Are you sure you want to delete [{{name}}]?",N="Operations",E="Yes",M="No",I="Clear",V="Select folder",B="Select folder or input path",Y="Disable",q="Enable",W="OK",G="Back",H="Have an account?",$="Go to login",Q="Close",K="Not currently supported",J="Please enter",X={refresh:P,add:S,edit:A,delete:"Delete",save:R,update:x,copied:D,delete_success:T,save_success:O,update_success:U,choose:F,confirm:z,cancel:j,delete_confirm:L,operations:N,yes:E,no:M,clear:I,choose_folder:V,choose_or_input_path:B,disable:Y,enable:q,ok:W,back:G,have_account:H,go_login:$,close:Q,no_support_now:K,empty_input:J},Z={name:"Name",size:"Size",modified:"Modified"},ee={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},oe="Load more",te="No more",se="Please input password",re={more:"More",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",add_aria2:"Add to Aria2 download","add_aria2-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},ae={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},ne={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},ie={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},de={powered_by:"Powered by AList",manage:"Manage"},ce={obj:Z,preview:ee,load_more:oe,no_more:te,input_password:se,toolbar:re,upload:ae,local_settings:ne,package_download:ie,footer:de},le="Login to the ALIST",_e="Remember me",pe="Forget password?",ue="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",me="Clear",ge="Login",he="Browse as a guest",fe="Login successfully",ye={title:le,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:_e,forget:pe,forget_url:ue,clear:me,login:ge,use_guest:he,success:fe},we={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy",home:"Home"},ke="AList Manage",be="You are not admin user, please login with admin account.",ve="Logout successfully",Ce="Send",Pe="Recieve",Se="Recieved messages",Ae={sidemenu:we,title:ke,not_admin:be,logout_success:ve,send:Ce,recieve:Pe,recieved_msgs:Se,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Re="Path",xe="Password",De="Write",Te="Hide",Oe="Readme",Ue="Apply to sub folder",Fe="One regular expression per line",ze="Support markdown content or markdown link",je={path:Re,password:xe,write:De,hide:Te,readme:Oe,apply_sub:Ue,hide_help:Fe,readme_help:ze},Le="External previews",Ne="Link expiration",Ee="Ocr api",Me="Aria2 uri",Ie="Version",Ve="Main color",Be={max_980px:"Max 980px",hope_container:"Hope container"},Ye="Customize head",qe="Privacy regs",We="Aria2 secret",Ge="Base path",He="Site title",$e="Default page size",Qe="Hide files",Ke="Customize body",Je="Pagination type",Xe="Favicon",Ze="Announcement",eo="Iframe previews",oo="Package download",to="Image types",so="Audio cover",ro="Api url",ao={all:"All",pagination:"Pagination",load_more:"Load more",auto_load_more:"Auto load more"},no="Logo",io="Home icon",co="Text types",lo="Audio types",_o="Video types",po="Proxy types",uo="Audio autoplay",mo="Video autoplay",go="Home container",ho="Token",fo={external_previews:Le,link_expiration:Ne,ocr_api:Ee,aria2_uri:Me,version:Ie,main_color:Ve,home_containers:Be,customize_head:Ye,privacy_regs:qe,aria2_secret:We,base_path:Ge,site_title:He,default_page_size:$e,hide_files:Qe,customize_body:Ke,pagination_type:Je,favicon:Xe,announcement:Ze,iframe_previews:eo,package_download:oo,image_types:to,audio_cover:so,api_url:ro,pagination_types:ao,logo:no,home_icon:io,text_types:co,audio_types:lo,video_types:_o,proxy_types:po,audio_autoplay:uo,video_autoplay:mo,home_container:go,token:ho},yo="Aria2",wo="Aria2 Version:",ko="Set aria2",bo="Copy Token",vo="Reset Token",Co="Reset Token Successfully",Po="Unknown type",So={aria2:yo,aria2_version:wo,set_aria2:ko,copy_token:bo,reset_token:vo,reset_token_success:Co,unkown_type:Po},Ao={mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},Ro={common:Ao},xo="Download file to local machine",Do="Transfer downloaded file to corresponding storage",To="Upload file to corresponding storage",Oo="Copy file from a storage to another storage",Uo="Completed",Fo="Running",zo="Pending",jo="Running",Lo="Canceling",No="Succeeded",Eo="Canceled",Mo="Errored",Io={down:xo,transfer:Do,upload:To,copy:Oo,done:Uo,undone:Fo,pending:zo,running:jo,canceling:Lo,succeeded:No,canceled:Eo,errored:Mo},Vo={see_hides:"Can see hides",access_without_password:"Access without password",add_aria2:"Add aria2 tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},Bo="Username",Yo="Pssword",qo="Base path",Wo="Role",Go="Permission",Ho="Update Profile",$o="Update profile successfully, please re-login.",Qo="Change Username",Ko="Change Password",Jo="Enable 2FA",Xo="Scan the QR code to save the secret key",Zo="Input the code of your 2FA app",et="Verify",ot="So you cannot modify anything in the manage page.",tt={permissions:Vo,username:Bo,password:Yo,base_path:qo,role:Wo,permission:Go,update_profile:Ho,update_profile_success:$o,change_username:Qo,change_password:Ko,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:Jo,"2fa_already_enabled":"2FA is already enabled",scan_qr:Xo,input_code:Zo,verify:et,"guest-tips":"You are currently visiting as a guest.",modify_nothing:ot},o=Object.assign({"./drivers.json":C,"./global.json":X,"./home.json":ce,"./index.json":s,"./login.json":ye,"./manage.json":Ae,"./metas.json":je,"./settings.json":fo,"./settings_other.json":So,"./storages.json":Ro,"./tasks.json":Io,"./users.json":tt}),st={};for(const e in o){const t=e.split("/")[1].split(".")[0];st[t]=o[e]}export{st as default};
