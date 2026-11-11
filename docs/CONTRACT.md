# Hợp đồng dự án huashu-motion

Nguồn duy nhất là [skills/huashu-motion/references/contract.md](../skills/huashu-motion/references/contract.md). Nó được phân phối cùng skill, và Agent đọc chính bản đó. Ở đây không giữ bản thứ hai, để tránh hai nơi viết khác nhau.

Tóm tắt một câu: dự án là một composition `index.html` (HTML cộng GSAP, render từng khung hình bằng chính Chrome của bạn), dùng ba loại đánh dấu để nó có thể được chỉ vào và sửa được:
- Biến composition: các giá trị có thể sửa trực tiếp;
- `data-om-id`: những thứ có thể được chỉ vào;
- Label trên timeline `scene:<id>`: phân cảnh.
