const pageurl = window.location.search; 
const pageUrlParam = new URLSearchParams(pageurl); 
const Fname = pageUrlParam.get('fname'); 
const Lname = pageUrlParam.get('lname'); 
const Address = pageUrlParam.get('address');
const City = pageUrlParam.get('city');
const Province = pageUrlParam.get('province');
const PostalCode = pageUrlParam.get('postalcode');
const Email = pageUrlParam.get('email');
const Phone = pageUrlParam.get('phone');
const pageUrlWithParams = new URL("http://REDIRECT_URL/?");
pageUrlWithParams.searchParams.append("fname", Fname);
pageUrlWithParams.searchParams.append("lname", Lname);
pageUrlWithParams.searchParams.append("address", Address);
pageUrlWithParams.searchParams.append("city", City);
pageUrlWithParams.searchParams.append("province", Province);
pageUrlWithParams.searchParams.append("postalcode", PostalCode);
pageUrlWithParams.searchParams.append("email", Email);
pageUrlWithParams.searchParams.append("phone", Phone);
jQuery(document).ready(function($) {
	jQuery(".confirm_btn").click(function(){
		console.log("button clicked");
		console.log(pageUrlWithParams.href);
		window.location.href= pageUrlWithParams.href;
		return false;
	})
});
