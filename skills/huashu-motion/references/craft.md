# Kinh nghiệm dùng theo điều kiện

## Bố cục và giải thích

Trước hết hỏi: nhân vật chính của cảnh quay này là gì, khán giả xem trên màn hình cỡ nào, cần đọc gì, trước và sau thay đổi có gì khác. Thiết kế keyframe theo khung hình thực tế để sớm phát hiện chữ quá nhỏ và thông tin bị chèn ép. Viết “cái nút ở nửa phải screenshot” hướng dẫn triển khai tốt hơn viết “cảm giác công nghệ choáng ngợp”.

Tách phong cách khỏi bố cục: cùng một bộ màu, font và chất liệu có thể có cỡ cảnh, bố cục không gian và chuyển động khác nhau. Pha trộn phong cách là lựa chọn kể chuyện hợp lệ, nhưng danh tính đối tượng và sự tương ứng khái niệm vẫn phải rõ. Đừng vì giữ thống nhất mà làm mọi cảnh quay thành cùng một template.

Gom đủ tư liệu thật trước rồi mới thiết kế; giao diện, hình dáng sản phẩm và cách tính dữ liệu cũng là sự thật. Thiếu thì đánh dấu chỗ thiếu, không dùng giao diện giả để bịa ra thao tác chưa xảy ra.

## Vì sao đối tượng chuyển động

Chuyển động hữu ích nhất có thể mô tả bằng một động từ: gom lại, tách ra, căn thẳng, nối, lọc, hé lộ. Hiểu “trước và sau khác gì” chủ yếu phải dựa vào thay đổi của đối tượng, không dựa vào lời dẫn giải thích một đoạn animation chẳng liên quan.

Giữ liên tục cùng một đối tượng giảm chi phí khán giả phải nhận diện lại. Chỉ giữ hero suốt phim khi câu chuyện thực sự cần; đừng biến “phải có hero” thành việc nhét mascot cứng vào mọi video.

Phim nghệ thuật làm nhanh có thể dùng hành động chính cộng với vòng lặp lấy từ tư liệu: bầu trời sao trôi, mực loang, mảng màu in chồng. Phản ứng trong câu chuyện, chữ dừng lại, đọc biểu đồ dữ liệu có thể hoàn toàn đứng yên. Diện tích chuyển động là manh mối chẩn đoán, không phải điểm chất lượng.

Chuyển cảnh có thể đến từ chất liệu đặc trưng của màn sau: chấm màu mọc kín, mặt giấy mở ra, đường nét kéo dài; cũng có thể chính là camera di chuyển trong cùng một thế giới. Cắt thẳng có tác dụng rõ về nhịp hay ngữ nghĩa thì dùng luôn.

## Camera và nhịp điệu

Mỗi lần di chuyển viết ra mục tiêu cụ thể và lý do. Thông tin trên screenshot thường chỉ cần zoom phẳng là đủ; chỉ khi quan hệ tiền cảnh-hậu cảnh đáng thể hiện mới tách lớp làm parallax. Các tiêu điểm liền kề gần nhau thì gộp hoặc lia ngang, tránh kéo ra rồi đẩy vào vô nghĩa.

Lấy khung bằng cách tính khung bao của nội dung then chốt trước, rồi trừ chỗ của phụ đề và lề. Chữ có đủ lớn không thì kiểm tra trên màn hình mục tiêu cuối cùng, không phán đoán bằng cỡ chữ trong code hay một độ phóng cố định.

Thao tác hướng dẫn cần thấy rõ vị trí và kết quả; biểu đạt nhịp nhanh có thể đẩy vào ngắn gọn, whip pan hoặc đổi tỉ lệ nhanh. Không có quy tắc chung về khoảng cách giữa cảnh quay, giới hạn zoom hay “thà chậm còn hơn nhanh”; các con số này phụ thuộc độ phân giải tư liệu, lượng thông tin, thể loại phim và phản hồi người dùng.

Nhấn mạnh hành động có thể dùng khởi động nhanh, dừng chắc; độ nảy chỉ dành cho đối tượng cần trọng lượng hoặc bật lại. Chuyển động đều dùng cho vật thể tốc độ không đổi, nền cuộn... là hợp lệ. Không tồn tại một đường easing nào bảo đảm cảm giác cao cấp.

## Khớp âm thanh và hình ảnh

Có lời dẫn thì xác nhận audio track và trục từ (word timing) trước, rồi mới thiết kế các phần hé lộ cần đồng bộ. Viết cue thành “nói đến từ này thì khán giả thấy kết quả”, đừng chỉ khớp điểm bắt đầu của hành động: nếu cần bay vào nửa giây thì hành động phải bắt đầu sớm hơn, điểm dừng mới là trọng âm.

Thời gian dừng dành cho đọc hình và suy luận. Lời dẫn không có chỗ ngắt hơi thì làm chậm hình cũng không tạo được khoảng lặng cho tai; sửa audio phải nằm trong phạm vi được ủy quyền lần này, không được tự động thêm bớt lời gốc của người dùng.

## Phân lớp triển khai

Khái niệm và kế hoạch thời gian→tư liệu và vẽ→animation đối tượng→camera→phụ đề→mix âm thanh. Xác định vấn đề nằm ở lớp nào trước, rồi sửa lớp đó. Tay nghề hình ảnh chưa đủ thì không nên làm lại timeline; lời dẫn quá dày thì không nên bắt người làm animation chỉnh camera không ngừng.

Phong cách Canvas: hiểu trước tư liệu hình thành thế nào: bố cục nét cọ, nhóm màu theo vùng, thứ tự lớp giấy và mực. Tư liệu tĩnh có thể cache, hướng nét cọ tiến hóa liên tục; mỗi frame xáo ngẫu nhiên lại sẽ thành nhấp nháy. Khi chồng nhân vật vào thì thống nhất ánh sáng hoặc chất liệu, ưu tiên giữ lại ảnh gốc.
