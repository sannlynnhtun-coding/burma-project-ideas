# NatMyatSi (နတ်မျက်စိ)

NatMyatSi သည် မေးခွန်းတစ်ခုနှင့် သင်္ကေတတစ်ခုကို တွဲဖက်ပြီး သက်ဆိုင်ရာအဖြေကို ပြသသော static-data project idea ဖြစ်သည်။

## Data

[`data.json`](./data.json) တွင် အောက်ပါ table သုံးခု ပါဝင်သည်။

- `questions` — မေးခွန်း ၁၀၀ ခု
- `symbols` — 4 × 4 ဇယားအတွက် သင်္ကေတ ၁၆ ခု
- `answers` — မေးခွန်းနှင့် သင်္ကေတအတွဲတိုင်းအတွက် အဖြေ ၁၆၀၀ ခု

`answers` record တစ်ခုကို `question_id` နှင့် `symbol_id` ဖြင့် ရှာဖွေနိုင်သည်။ Data အားလုံးသည် UTF-8 JSON ဖြစ်ပြီး database မလိုပါ။

## Application flow

1. မေးခွန်းစာရင်းကို ရယူပြီး အသုံးပြုသူအား မေးခွန်းတစ်ခု ရွေးခိုင်းပါ။
2. သင်္ကေတ ၁၆ ခုကို copy လုပ်၍ random shuffle လုပ်ပါ။ မူရင်း array ကို မပြောင်းသင့်ပါ။
3. Shuffled သင်္ကေတများကို 4 × 4 ဇယားဖြင့် ခဏပြသပါ။
4. သင်္ကေတများကို `?` ဖြင့် ဖုံးပြီး အသုံးပြုသူအား cell တစ်ခုရွေးခိုင်းပါ။
5. ရွေးထားသော cell အောက်ရှိ `symbol.id` နှင့် ရွေးထားသော `question.id` ကို အသုံးပြု၍ အဖြေကို ရယူပါ။
6. Question၊ revealed symbol နှင့် answer text ကို result screen တွင် ပြသပါ။

```text
Question list
    ↓ choose question
Shuffle 16 symbols
    ↓ hide the 4 × 4 grid
Choose one cell
    ↓ questionId + symbolId
Show the matching answer
```

## NestJS API flow

Companion NestJS API တွင် အောက်ပါ endpoints ကို အသုံးပြုနိုင်သည်။

```http
GET /nat-myat-si/questions
GET /nat-myat-si/questions?search=အိမ်ထောင်
GET /nat-myat-si/questions/:questionId
GET /nat-myat-si/symbols
GET /nat-myat-si/readings/:questionId/:symbolId
```

ဥပမာ—

```http
GET /nat-myat-si/readings/1/pisces
```

```json
{
  "question": {
    "id": 1,
    "text": "ဒီနှစ်အတွင်း အိမ်ထောင်ကျမှာလား။"
  },
  "symbol": {
    "id": "pisces",
    "name": "Pisces",
    "symbol": "♓",
    "row": 1,
    "column": 3
  },
  "answer": {
    "text": "အဝေးတစ်နေရာ (သို့) ခရီးသွားရင်း ဖူးစာဆုံ၍ အိမ်ထောင်ကျမည်။"
  }
}
```

Random shuffle နှင့် အသုံးပြုခွင့်အကြိမ်ရေက frontend/session အပိုင်း၏ တာဝန်ဖြစ်သည်။ Static API က မေးခွန်း၊ သင်္ကေတနှင့် သက်ဆိုင်ရာအဖြေကိုသာ ပြန်ပေးသည်။
