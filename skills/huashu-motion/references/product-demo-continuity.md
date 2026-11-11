# Best practice: dùng lấy khung liên tục để giải thích rõ thao tác sản phẩm

Đọc khi làm demo sản phẩm, workflow đa thiết bị, phim ngắn về thao tác giao diện. Tham chiếu là [demo giao task cho Codex qua dot](https://x.com/ChatGPT/status/2108636748217770180) chính thức của ChatGPT, đăng ngày 2026-10-09, phân tích ngày 2026-10-10. Giá trị của nó nằm ở nhịp điệu, bố cục và cách chuyển giao ánh nhìn; nền sáng, bong bóng vàng và vỏ thiết bị là lựa chọn riêng của phim này.

## Bằng chứng và phạm vi áp dụng

Phim gốc 1920×1080, 30fps, 732 frame video, track video khoảng 24.40s. Các khung thời gian dưới đây tính từ 0 của phim gốc, lấy ranh giới xấp xỉ, không phải bảng dựng từng frame. Đợt này đã đối chiếu frame trích toàn phim, chuỗi frame cách nhau 0.1s ở các đường nối then chốt và frame đại diện ở độ phân giải gốc; chưa duyệt phim ở tốc độ bình thường hay nghe duyệt bằng tai, nên không phán đoán easing chính xác, beat, hiệu ứng âm thanh hay phần mềm sản xuất. Video nguồn có track âm thanh.

“Quan sát hình ảnh” là những gì nhìn thấy được trong phim gốc; “phương pháp chuyển giao” là lựa chọn triển khai đề xuất dựa trên đó, chưa được kiểm chứng bằng thành phẩm với đề bài lạ. Phim gốc là demo quảng bá, không lấy thời gian chạy, con số test hay phần đóng gói thao tác trong đó để chứng minh năng lực sản phẩm. Phần phân phối cùng skill là phương pháp và link nguồn; phim gốc và các frame lấy làm bằng chứng nằm trong thư mục nghiên cứu riêng của dự án.

## Phim gốc tổ chức việc xem thế nào

- Khoảng 0.0–0.7s: toàn bộ điện thoại ở giữa nền trắng, sau đó phóng nhanh và lấy khung lại vào ô nhập bên dưới. Nhận ra vật mang trước, rồi biến thao tác thành nhân vật chính; nửa trên thiết bị ra khỏi khung là crop có chủ đích.
- Khoảng 0.8–3.8s: yêu cầu hiện ra từng chữ, ô nhập cao dần theo số dòng, cận cảnh gần như đứng yên. Bản thân chữ thay đổi đã đẩy sự kiện đi tới, không cần camera đồng thời lượn lờ. Gõ xong có một khoảng dừng ngắn rồi mới gửi.
- Khoảng 3.8–6.6s: ô nhập được xóa, tin nhắn vào hội thoại; khung kéo về toàn bộ điện thoại, câu trả lời xuất hiện. Cận cảnh giải thích “khởi tạo thế nào”, toàn cảnh giải thích “khởi tạo xong thì sao”.
- Khoảng 6.6–7.5s: điện thoại dịch sang phải, cửa sổ desktop hiện ra từ bên trái và mở rộng, cuối cùng thành bố cục đặt cạnh nhau với desktop là chính, điện thoại là phụ. Điện thoại và yêu cầu màu vàng vẫn nhận ra được; quan hệ đa nền tảng được dựng bằng bố cục, không phải bằng một trang tiêu đề riêng.
- Khoảng 7.5–10.9s: máy gần như ổn định, ba task lần lượt xuất hiện, con trỏ di về một trong số đó. Desktop gánh phần đọc, điện thoại làm tham chiếu nguồn; hai vật mang không tranh cùng một phần chú ý.
- Khoảng 11.0–12.8s: click vào task, chi tiết bên phải xuất hiện; khung đẩy vào phần chi tiết, viền desktop và các phiên khác dần rút đi, chỉ còn yêu cầu được giao và trạng thái. Thấy nó đến từ đâu trước, rồi mới bỏ bớt gánh nặng thị giác xung quanh.
- Khoảng 13.8–16.4s: tóm tắt kết quả và danh sách thay đổi xuất hiện, khung hình dành cho việc đọc; khoảng 16.4–17.1s nội dung trượt lên, yêu cầu mở PR tiếp theo đi vào. Sau khoảng 18.3s kết quả hoàn tất xuất hiện, tiếp tục giữ. Cuộn nội dung gánh phần tiến triển, khung không đổi tỉ lệ liên tục nữa.
- Khoảng 20.4–20.8s: nội dung được xóa, màn trắng ngắn; khoảng 20.9–21.3s thẻ thông báo đi vào và dừng lại, giữ đến hết phim. Thông báo dùng lại cùng avatar nhân vật và tóm tắt ba task, gói yêu cầu ở đầu phim thành một kết quả.

Đây là cấu trúc xem “toàn cảnh→cận cảnh thao tác→toàn cảnh→đặt cạnh quan hệ→cận cảnh chi tiết→thông báo kết quả”. Khi chuyển giao, giữ thứ tự nhân quả, định lại thời gian theo lượng thông tin của mình; không lấy 24s, ba task hay các số giây này làm hạn ngạch khuôn mẫu.

## Nhịp điệu: di chuyển ngắn, giải thích dài, sự kiện dẫn cảnh sau

Viết sự kiện nghiệp vụ trước: bắt đầu nhập, nhập xong, gửi, trả lời, task xuất hiện, click, kết quả xuất hiện, thông báo. Rồi với mỗi lần đổi khung, tìm sự kiện kích hoạt và điểm dừng. Chia một lần xem thành “di chuyển đến tiêu điểm→dừng lại→đọc hiểu/trạng thái đổi”, chỉnh riêng thời lượng di chuyển và thời lượng đọc; giảm tốc toàn bộ sẽ đồng thời kéo chậm việc nối cảnh, tăng tốc toàn bộ sẽ nuốt mất thời gian đọc.

Trong tham chiếu này, phần mở đầu và phần sắp xếp lại đa thiết bị khá ngắn gọn, còn gõ chữ, mở task và đọc kết quả chiếm thời gian dài hơn. Có thể thử một lần di chuyển khung đơn giản khoảng 0.3–0.8s trước, rồi chỉnh theo màn hình mục tiêu và khoảng cách xem; đây là điểm xuất phát để chuyển giao, không phải easing đo được của phim gốc hay khoảng áp cho mọi cảnh quay. Trong giai đoạn ổn định có thể gõ từng chữ, mở danh sách hoặc cập nhật trạng thái, hình đứng yên mà vẫn có thông tin tăng thêm.

Demo tuần tự thì nối con trỏ, phản hồi click và trạng thái mới với nhau. Thời gian chờ trước khi kết quả xuất hiện có thể nén, nhưng đừng cắt thành ám chỉ năng lực “click là xong”; khi cần, giữ trạng thái đang xử lý hoặc thể hiện rõ thời gian đã trôi qua. Thời gian chạy trong tham chiếu chỉ là nội dung hình ảnh, không phải số đo thực tế của sản phẩm lần này.

## Bố cục: mỗi lần chỉ định một vùng đọc chính

Cảnh toàn để khán giả nhận ra vật mang và quan hệ, cảnh cận để khán giả đọc chữ then chốt. Cảnh đặt cạnh nhau phải chỉ định chính/phụ: cửa sổ chính đủ lớn để đọc, thiết bị phụ chỉ cần nhận ra cùng một yêu cầu/nguồn như cảnh trước. Chỉ đổi tiêu điểm khi cần đọc thiết bị phụ, không coi cả hai giao diện nhỏ đều là nội dung chính.

Giữ một ít mỏ neo nhận diện, như cùng một yêu cầu, avatar, màu bong bóng, tiêu đề task. Nền trắng và màu nhấn thưa giúp chủ thể dễ định vị; đổi thương hiệu thì dùng yếu tố nhận diện thật của thương hiệu đó, không cần chép màu vàng hay nhân vật. Khung viền, bo góc, khoảng cách chữ và bóng nhẹ giúp phân lớp giao diện; phản chiếu mạnh và bóng dày không thay được độ rõ của chữ.

Được phép crop bỏ vỏ thiết bị hoặc thanh bên không liên quan để giải thích. Chỉ tính là lấy nét khi trước và sau crop đều định vị được cùng một tiêu điểm và chữ then chốt còn nguyên; cắt mất thông tin quan trọng nhất là lỗi. Kiểm tra cỡ chữ và ngắt dòng theo độ phân giải output thực tế và kích thước xem mục tiêu; độ dài dòng tiếng Anh của tham chiếu không áp thẳng được cho tiếng Trung. Với tiếng Việt cũng vậy: từ tiếng Việt ngắn nhưng chuỗi thường dài hơn bản tiếng Anh, và dấu thanh xếp chồng cần line-height ≥ ~1.3 — kiểm tra ngắt dòng và dấu không bị cắt trên frame thật.

## Chuyển động máy: định điểm dừng trước, rồi mới định cách đi qua

Mỗi đường nối chỉ viết một câu: `tiêu điểm của cảnh trước là gì→nó đến đâu trong cảnh sau→nhờ vậy thông tin mới nào hiện ra`. Điện thoại dịch phải nhường chỗ cho desktop là sắp xếp lại đối tượng; ô nhập phóng to là lấy khung phẳng; chi tiết tách khỏi khung desktop là rút ra một tầng thông tin. Không cần thực hiện tất cả bằng một camera 3D.

Khi triển khai, tách bốn lớp: nội dung/cuộn giao diện, vỏ thiết bị/cửa sổ, lớp bao lấy khung, chú thích/phụ đề cố định. Giao diện nhìn thẳng đơn giản dùng DOM/SVG và biến đổi 2D là đủ; chỉnh riêng vị trí đối tượng và độ phóng khung, tránh việc ô nhập xuống dòng kéo hỏng luôn tỉ lệ thiết bị. Đồng bộ nhiều lớp chỉ phục vụ những lần chuyển giao rõ ràng, không cho mọi lớp cùng chuyển động chỉ để có cảm giác động.

Lấy khung phẳng có thể dùng tiêu điểm cục bộ của lớp bao `(fx, fy)`, điểm dừng trên khung hình `(vx, vy)`, vị trí layout của góc trên trái lớp bao trong khung hình khi chưa biến đổi `(bx, by)` và độ phóng `s` để tính dịch chuyển của lớp bao: `x = vx - bx - s * fx`, `y = vy - by - s * fy`. Tiền đề là gốc biến đổi của lớp bao ở góc trên trái, điểm cục bộ đã tính cả phần cuộn nội dung, lớp cha không có biến đổi nào khác chưa được tính; không được dùng biên đã scale/dịch thay cho `bx/by`. Chỉ khi lớp bao vốn nằm ở gốc khung hình thì `bx/by` mới bằng 0. Animation đi từ tư thế hiện tại đến điểm dừng này, không được mỗi lần xuất phát lại từ vị trí căn giữa mặc định; mục tiêu ở gần thường chỉ cần dịch chuyển.

Khi cần tách phần chi tiết, ban đầu cho nó trùng vị trí, kích thước và chữ với giao diện gốc, khán giả nhận ra rồi mới làm mờ khung xung quanh hoặc đẩy vào. Hiệu ứng đóng gói giữ là layer của phim, không được giả làm animation có sẵn của sản phẩm. Tư liệu screenshot phải dùng mảnh crop/mask khớp, không được xóa chữ rồi viết phản hồi không tồn tại.

Kết bằng thông báo có thể là một thẻ độc lập, dùng lại avatar/tên để nối kết quả về người khởi tạo. Phim gốc ở đây dùng màn trắng để ngăn cách, không yêu cầu mọi cảnh quay đều biến hình liền mạch; màn trắng phải là dấu chấm kết thúc có chủ ý, không được dùng để che lỗi tải hay nhảy frame.

Mọi tư thế do cùng một timeline hoặc lấy mẫu theo thời gian tuyệt đối quyết định. Trạng thái đầu của lớp bao GSAP đặt rõ ràng; các `fromTo` sau đó đặt `immediateRender:false` khi cần, tránh cận cảnh tương lai hiện ra sớm ở frame đầu. Seek ngược cũng phải khôi phục cùng nội dung, crop và vị trí máy.

## Đưa vào sản xuất thực tế và nghiệm thu

Khi bắt đầu demo sản phẩm, dùng tư liệu thật viết một bản ghi cảnh quay ngắn:

`sự kiện｜vùng đọc hiện tại｜mỏ neo nhận diện được giữ｜bố cục đầu-cuối｜hành động nội dung/hành động lấy khung｜thời điểm dừng｜cửa sổ đọc｜thông tin mới ở cảnh sau`

Làm trước đoạn dễ mất phương hướng nhất, như “toàn thiết bị→đặt cạnh đa nền tảng→chi tiết task”. Dùng tư liệu và font cuối cùng kiểm tra chuyển động và việc đọc, rồi mới trải ra cả phim. Cú pháp `keynote-ui` hiện có cung cấp tiêu đề, thẻ và highlight screenshot; nó không tự động bảo đảm sắp xếp lại liên tục đa thiết bị, nội dung cuộn được và tách chi tiết — cần những thứ này thì dùng mã nguồn tự do `blank` để làm các cảnh quay tương ứng.

Khi nghiệm thu, xem riêng:

- Ba frame đại diện: toàn cảnh có nhận ra được không, cảnh đặt cạnh có chính/phụ không, chi tiết có đủ lớn và đọc được không. So với tham chiếu về trọng lượng thị giác, khoảng trống và mục đích lấy khung; không lấy cùng màu cùng font để giả là đã học được bố cục.
- Chuỗi ngắn ở mỗi đường nối: tiêu điểm cũ được giao cho tiêu điểm mới thế nào, có đồng thời đổi vị trí, độ phóng và nội dung khiến phải tìm lại đối tượng không; di chuyển nhanh có dừng đúng vị trí không.
- Phim thành phẩm ở tốc độ bình thường: cửa sổ đọc có đủ không, đoạn ổn định có nội dung tiến triển không, chuyển động máy có đi trước thao tác của người dùng không, thông báo có trả lời yêu cầu ở đầu phim không. Trích frame không thay được việc này.
- Âm thanh: theo quy trình nhạc nền/hiệu ứng âm thanh của skill chính, thiết kế theo điểm dừng của mình; lần này chưa nghe duyệt tham chiếu, không dựa vào đó để chỉ định BPM hay công thức âm thanh.

Tiêu chuẩn chuyển giao thành công là nội dung lạ cũng xem hiểu được từ lúc khởi tạo đến kết quả. Lần chuyển giao đầu ghi là “thử nghiệm”, sau khi duyệt phim độc lập và có phản hồi người dùng thật thì đưa cách sửa hiệu quả, khung thời gian thất bại và phạm vi áp dụng về `experience.md`; khi xuất hiện phản chứng thì sửa kết luận tương ứng, không nâng công thức của phim này thành quy tắc cứng cho mọi animation.
