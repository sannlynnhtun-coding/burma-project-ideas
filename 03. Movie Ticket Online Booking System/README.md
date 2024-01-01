# Movie Ticket Online Booking System

Summary
>ကြည့်ချင်တဲ့ Movie ရွေးမယ်။ ကိုယ်သွားကြည့်ချင်တဲ့ရုပ်ရှင်ရုံရွေးမယ်။ ကိုယ့်ကြည့်ရမည့် Room ကိုရွေးချယ်မယ်။ ပြီးရင်ကြည့်ရမည့် Movie အချိန်ကိုရွေးချယ်မယ်။ ထိုင်ချင်တဲ့ ခုံနံပါတ်တွေ ရွေးချယ်မယ်။ ရွေးချယ်ပြီးသော ခုံများကို လက်မှတ်ဖြတ်မယ်။

1. ပထမဦးဆုံး page တွင် ကြည့်ရှုနိုင်သော movie များကို တွေ့နိုင်ပါတယ်။
Tbl_MovieList JSON ကနေ ထုတ်ပြနိုင်ပါတယ်။
2. ကျွန်တော်တို့ ကြည့်ချင်သော
Movie တစ်ခုကို ရွေးချယ်ပါမယ် ရွေးချယ်ပြီးနောက် ဒုတိယ page တွင် ကျွန်တော်တို့ ကြည့်ချင်သော ရုပ်ရှင်ရုံနှင့် အခန်းများကို ပြသထားပါမယ်။
ထို Data ကို Tbl_CinemaRoom JSON ကနေ ရယူနိုင်ပြီး ပထမ Page မှ ရွေးထားသော CinemaId နှင့် ချိတ်ဆက်ပြီး ထုတ်ပြနိုင်ပါတယ်။
3. ကျွန်တော်တို့ကြည့်ချင်သော ရုပ်ရှင်ရုံနဲ့ အခန်းကိုရွေးပြီးသော အခါ movie ပြသမယ့်အချိန်ကို ရွေးခြယ်နိုင်ရန် တတိယ page တွင်ပြသထားပါတယ်။
၎င်း Data ကို Tbl_MovieSchedule JSON မှာပါရှိသော ShowDateTime မှ Time only ကိုယူသုံးရပါမယ်။
၎င်းပြသချိန်ထဲမှတစ်ခုကိုရွေးချယ်ပေးရပါမယ်။ ထိုသို့ရွေးချယ်ပြီးနောက် နောက် Page တစ်ခုကိုထပ်သွားပါမယ်။
4. နောက် Page သည် ခုံရွေးရမယ့် page ဖြစ်ပါသည်။ ကိုယ်လိုချင်သောခုံနံပါတ်များအား ရွေးချယ်ပြီးသောအခါ ရွေးချယ်ထားသောခုံများ အားလုံးကို ပေါင်းပေးရပါမည်။ ရွေးချယ်ပြီးနောက် Proceed ကိုနှိပ်လိုက်ပါက ပထမဆုံး Page မှ နောက်ဆုံး Page ထိ‌ရွေးချယ်ခဲ့သော Data များအားလုံးကို ခုံတစ်ခုစီအလိုက် voucher များထုတ်ပေးရပါမည်။

ဤတွင်တစ်ခန်းရပ်ပါမည်။

<table>
 <thead>
  <tr>
   <th colspan="3">Contributors</th>
  </tr>
 </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/sannlynnhtun-coding"><img src="https://github.com/sannlynnhtun-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/mgchit-coding"><img src="https://github.com/mgchit-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/dabria2004"><img src="https://github.com/dabria2004.png" width="60px;"/></a></td>
        </tr>
    </tbody>
</table>
 
![Alt text](https://raw.githubusercontent.com/sannlynnhtun-coding/Movie-Ticket-Online-Booking-System/main/MovieTicketOnlineBookingSystemFlow.jpg)

![Alt text](https://raw.githubusercontent.com/sannlynnhtun-coding/Movie-Ticket-Online-Booking-System/main/MovieTicketOnlineBookingSystemMindMap.png)
