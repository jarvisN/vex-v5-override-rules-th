# VEX V5 Override Rules TH

เว็บอธิบายกฎ VEX V5 Robotics Competition Override ภาษาไทยแบบย่อ อ้างอิงจาก `v5rc-override-0.1.2.pdf` รุ่น 0.1.2 ที่ผู้ใช้ให้มา ออกแบบเป็นหน้าเอกสารคล้ายคู่มือ Game Manual เพื่ออ่านบนเว็บ พร้อมส่วนแปล/อธิบายรายหน้า 1-131 แบบ public-safe

หน้าเว็บถูกเก็บไว้ในโฟลเดอร์ `site/` และ deploy ด้วย GitHub Actions ไปยัง GitHub Pages

## เปิดดูในเครื่อง

เปิดไฟล์ `site/index.html` ได้โดยตรง หรือรัน static server:

```powershell
python -m http.server 8080 -d site
```

แล้วเข้า `http://127.0.0.1:8080/`

## ขอบเขต

- เป็นคำอธิบาย/แปลสรุปเพื่อช่วยเรียนรู้ ไม่ใช่ manual ทางการ
- หากมีข้อขัดแย้ง ให้ยึด PDF ภาษาอังกฤษฉบับล่าสุดและ official VEX Q&A
- ไม่ได้คัดลอก manual ทั้งฉบับหรือแทนที่เอกสาร VEX ทางการ
