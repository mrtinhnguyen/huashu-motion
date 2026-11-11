# Tay nghề hình ảnh và đạo diễn cảnh quay

Đọc khi làm một animation mới, khi người dùng yêu cầu nâng độ hoàn thiện, hoặc khi phim thành phẩm bị chê là thô/nhàm. Phần này hướng dẫn phán đoán sáng tạo; code chạy được, kiểm tra chênh lệch frame đạt, hay số lượng asset đủ — không cái nào là giấy chứng nhận thẩm mỹ. Prototype dùng để kiểm chứng kỹ thuật thì ghi rõ là prototype, không tự động nâng nó thành mẫu sáng tạo.

## Xác định trước điều gì đáng được nhìn thấy

Chuyển mục tiêu giải thích trong brief thành bằng chứng nhìn thấy được. Viết ra nhân vật chính, sự thay đổi, một chi tiết đáng lại gần để xem, và nhận thức cuối cùng khán giả mang về. Ví dụ “trạm hết xe”: vừa có dòng chảy xe toàn thành phố, vừa có cái trụ đỗ trống sau khi chiếc xe cuối cùng rời đi; con số về 0 và khoảng trống trong không gian thật phải chứng minh lẫn nhau.

Khi có tham chiếu, xem hình ảnh và chuyển động thực tế, không chỉ gom tên phong cách: ghi lại frame đại diện, tỉ lệ chủ thể trên màn hình, chất liệu và ánh sáng, điểm bắt đầu/kết thúc của cảnh quay, thay đổi tốc độ nhìn thấy được, thời gian dừng để đọc hình và cách nối cảnh. Tách quan sát khỏi suy đoán. Mô hình hiểu video có thể bổ sung ngữ nghĩa nhưng không thay được việc đối chiếu frame gốc; phần “đóng gói” của phim giới thiệu sản phẩm không tự động đại diện cho năng lực sản phẩm.

Với demo sản phẩm và luồng giao diện đa thiết bị, đọc khi cần [best practice về lấy khung liên tục](product-demo-continuity.md): timecode của tham chiếu ChatGPT, chính/phụ trong vùng đọc, lấy khung ngắn gọn rồi đọc ổn định, tách lớp giao diện khỏi lớp lấy khung, và nghiệm thu từng đoạn. Khi dùng cấu trúc xem của nó, xác định lại thời lượng theo lượng thông tin của phim này.

Giữ hướng đã được xác nhận. Chưa có hướng thì theo quy trình chọn ở entry chính. Đừng lấy lý do “chưa chỉ định đủ mọi tham số” để đẩy phán đoán sáng tạo về lại cho người dùng.

## Làm hình ảnh chịu được khi máy quay lại gần

Từ cỡ cảnh thực tế suy ngược ra độ chính xác cần làm, phân bổ công sức theo đóng góp nhìn thấy được:

- Toàn cảnh: làm trước đường nét bao, các lớp không gian, nhóm sáng tối và tiêu điểm thị giác. Thành phố cần có tỉ lệ khu phố, bờ sông hoặc trục đường chính, nhà cao thấp và mật độ dày thưa, chứ không phải rải đều một loại hộp.
- Trung cảnh: bổ sung cấu trúc giải thích môi trường: chân đế/ô cửa/mái hiên của tòa nhà, mặt đường và bó vỉa, trụ đỡ của cầu, quan hệ giữa trạm và đường phố. Phần tử lặp lại dùng họ và biến thể có logic, tránh dán chi tiết ngẫu nhiên khắp nơi.
- Cận cảnh: phải đáp ứng được chất liệu và cấu tạo. Xe đạp cần khung, lốp, ghi-đông và yên nhận ra được; trụ đỗ cần cấu trúc và bóng tiếp xúc. Khi đổi chủ đề sản phẩm, kiểm tra cấu trúc, cạnh viền và điểm tiếp xúc tương ứng của đối tượng đó, không chép nguyên danh sách của thành phố.

Kiểm tra xem đường bao hình học, highlight ở cạnh, khác biệt độ nhám, xuyên sáng/phản chiếu, bóng tiếp xúc và đèn chính/phụ có cùng mô tả một loại chất liệu không. Chỉnh màu đẹp không cứu được độ dày như tờ giấy, vật lơ lửng không chạm đất hay cấu trúc sai. Vi chi tiết chỉ đáng thêm khi nhìn thấy được trên output cuối cùng và màn hình mục tiêu.

2D cũng có trách nhiệm tay nghề như vậy: tự hình, khoảng cách chữ và ngắt dòng; đường cong và điểm nối; tỉ lệ hình, khoảng trống và trọng lượng thị giác; cách crop, độ phân giải và xử lý viền của ảnh thật. Màu phẳng, tối giản hay bảng trắng đều có thể rất tinh tế; chi tiết không có nghĩa là phủ texture lên mọi thứ. Với chữ tiếng Việt: dấu thanh xếp chồng (ví dụ “Ấ”, “ỗ”) cần line-height ≥ ~1.3 cho chữ display và font có hỗ trợ tiếng Việt đầy đủ, nếu không dấu sẽ bị cắt hoặc rơi về font fallback. Font kèm repo có đủ tiếng Việt: Anton, Bangers, Alfa Slab One, EB Garamond, Cormorant Garamond, Playfair Display, Josefin Sans, Exo 2, Be Vietnam Pro, Inter (`om fonts --vi` liệt kê đầy đủ); Poppins, Noto Sans SC, LXGW WenKai và các font không có dấu “vi” trong danh sách là bản subset KHÔNG có tiếng Việt.

Trước hết chọn trạng thái đại diện bộc lộ được rủi ro tay nghề chính của phim, render thật ở độ phân giải cuối. Phim không gian có thay đổi tỉ lệ thì dùng cận cảnh kiểm tra cấu tạo, toàn cảnh kiểm tra bố cục; biểu đồ động hoặc vòng lặp có bố cục cố định thì kiểm tra trạng thái dày nhất, thưa nhất hoặc thay đổi then chốt, không ép cỡ cảnh chỉ để nghiệm thu. Đặt cạnh hướng đã xác nhận hoặc tham chiếu để xem, ghi lại khoảng cách cụ thể và sửa, rồi mới trải ra toàn timeline. Không được dùng mô hình xám độ chính xác thấp giả làm phong cách cuối, trừ khi lần này người dùng chọn chính là mô hình xám.

## Viết nhịp điệu thành quá trình xem

Với mỗi cảnh quay, viết “vì sao nhìn vào đây” trước, rồi mới chọn cỡ cảnh và chuyển động. Ghi chép làm việc cho mỗi cảnh quay giữ ngắn gọn:

`ID cảnh quay｜khán giả nhận được gì｜nhân vật chính/tiêu điểm｜bố cục và cỡ cảnh đầu-cuối｜hành động của đối tượng｜đường đi/ý đồ tốc độ của camera｜điểm dừng và thời gian giữ｜nối sang cảnh sau thế nào`

Ý đồ tốc độ của cảnh quay phải đọc được thành một câu, như “hạ nhanh xuống mặt phố, bám sát theo xe đạp, giảm tốc dừng lại khi gần cái trụ trống”, chứ không phải cả phim lặp một smoothstep. Tương phản giữa các đoạn liền kề có thể đến từ nhanh/chậm, xa/gần, hướng, mật độ hình, chuyển động chính/phụ hay động/tĩnh; chọn theo nội dung, không quy định phải gom đủ bao nhiêu thủ pháp.

- Đẩy vào (push in): rút bằng chứng ra từ một quan hệ; vị trí nhân vật chính và bố cục khi dừng phải rõ ràng.
- Kéo ra (pull out): hé lộ phần cục bộ thuộc về hệ thống nào; kéo ra rồi thì phải thật sự xuất hiện thông tin mới.
- Lia ngang/bám theo: để khán giả theo một sự kiện; parallax tiền cảnh giúp thể hiện tốc độ và không gian.
- Nâng hạ/quay vòng: hé lộ cấu trúc, che khuất hoặc quan hệ không gian mà mặt bằng phẳng không thấy được.
- Cắt thẳng/match cut theo hành động: đổi câu hỏi đang xem, thời điểm của câu chuyện hay tỉ lệ kể. Không cần phát minh chuyển cảnh cầu kỳ cho mỗi lần cắt.
- Đứng yên: để sự kiện hoàn tất, thông tin được đọc hiểu hoặc cảm xúc lắng xuống. Dừng lại cũng phải có bố cục đáng xem và sự thay đổi đã xảy ra.

Cảnh nhanh có thể ngắn gọn, dứt khoát; cảnh chậm bắt buộc phải có thông tin tăng thêm hoặc giá trị để xem. Khi cần nhịp phong phú, việc trượt chậm mượt suốt cả phim đáng bị nghi ngờ; nhưng chuyển động đều vẫn hợp lý với quá trình tốc độ không đổi hoặc khí chất bình lặng rõ ràng. Đừng nâng “thà chậm còn hơn nhanh”, khoảng cách giữa các cảnh quay, giới hạn zoom hay hạn ngạch số lần cắt của các tác phẩm cũ thành quy tắc thẩm mỹ phổ quát. Yêu cầu nhịp điệu mà người dùng nêu rõ lần này được ưu tiên.

Với tác vụ liên tục như thao tác web hay đọc bài viết, ưu tiên giữ vị trí con trỏ, nút, tài liệu hoặc dòng chữ mà khán giả đang theo dõi. Làm rõ đường nối trước: tiêu điểm của trạng thái trước rơi vào đâu ở trạng thái sau, đi qua bằng cách nào; khi trạng thái thay đổi, tránh đồng thời reset bố cục, độ phóng và hướng nhìn. Có thể nén thời gian chờ, nhưng đừng đánh đồng thay đổi nhanh-chậm với việc đột ngột đổi khung hình. Chỉ cắt thẳng khi phim cần đổi câu hỏi đang xem mà vẫn dễ định vị; khi người dùng đã chỉ ra chỗ đứt gãy, sửa sự liên kết về không gian và hành động trước, không tăng số lần cắt để đẩy nhịp.

Thiết kế điểm dừng trước, đường cong tốc độ phục vụ điểm dừng sau. Tăng tốc nhanh, bám theo, phanh gấp và giảm chấn dài là những lựa chọn khác nhau; không áp một đường easing lên mọi đối tượng và camera. Chữ quan trọng cần ổn định rõ ràng khi cần đọc; chuyển động nhanh không cần bảo đảm mọi frame đều đọc được chữ, nhưng tránh để sự thật then chốt chỉ lóe qua trong motion blur. Khi việc nhóm/sắp xếp chính là phần giải thích, tên nhóm, số thứ tự và nội dung phải theo dõi được; lớp chú thích cố định tách khỏi camera của cảnh, kể cả lúc đang di chuyển cũng không được vô tình ra khỏi khung.

## Làm đoạn khó nhất trước, rồi mới mở rộng

Làm thay đổi xem quan trọng nhất thành một đoạn ngắn phát được, dùng chi tiết hình ảnh thật. Phim cần chuyển động máy thì kiểm chứng việc chuyển điểm nhìn và dừng lại; tác phẩm máy cố định thì kiểm chứng trạng thái đối tượng, mật độ thông tin hoặc đường nối vòng lặp, không gom thêm thay đổi điểm nhìn và khoảng dừng. Dùng đường render cuối cùng, không dùng phân cảnh PPT hay mô tả bằng chữ thay cho chuyển động.

Sau khi phát liên tục, hỏi: mắt bị dẫn tới đâu? Khoảnh khắc nào thông tin mới xuất hiện? Chỗ nào chỉ có camera trượt mà nội dung không tiến lên? Ghi chẩn đoán vào timecode. Nếu tham chiếu có tương phản rõ về tốc độ/cỡ cảnh mà bản mẫu vẫn chỉ một kiểu trượt chậm, sắp xếp lại các cảnh quay trước, không cứu bằng cách tăng tốc toàn bộ.

Trong lúc làm, xử lý riêng ba lớp để tránh vá sai chỗ:

1. Trông rẻ tiền: kiểm tra cấu tạo, chất liệu, ánh sáng, tự hình và compositing; không phải thêm chuyển động máy trước.
2. Trông nhàm: kiểm tra tiến triển giải thích, sự thay đổi về cỡ cảnh, tốc độ và điểm dừng; không phải thêm hạt trang trí trước.
3. Xem không hiểu: kiểm tra tiêu điểm, danh tính đối tượng, dữ liệu và thời gian đọc; không phải chất thêm lời dẫn trước.

Trong quảng bá sản phẩm, tư liệu thật ràng buộc sự thật và nhận diện sản phẩm, nhưng không có nghĩa phim chỉ được lia nguyên tấm screenshot. Khi cần thể hiện sự thay đổi, có thể tách một câu, một con số hoặc một thẻ từ trang thật thành layer độc lập, để nó được lấy nét, tách lớp, nhận chỉnh sửa rồi trở về đúng vị trí. Chữ và dữ liệu gốc giữ chính xác, phần đóng gói của phim tách bạch với control thật; không được để hiệu ứng diễn giải giả làm tính năng gốc của sản phẩm. Giữ quan hệ tham chiếu và quy vị trong trang thì lớp không gian và thay đổi tốc độ mới có giá trị nhận thức.

## Phần triển khai phải giữ tự do sáng tạo

Tách lớp chuyển động camera và chuyển động đối tượng; tách bảng cảnh quay, asset của cảnh và sự kiện nghiệp vụ. Cảnh quay lấy mẫu theo thời gian tuyệt đối, ghi rõ các lần cắt, mọi giá trị ngẫu nhiên đều cố định seed. Phát xuôi, seek ngược và render lại một frame phải ra cùng một trạng thái.

Chọn công cụ theo hình ảnh: SVG/Canvas hợp với đồ họa chính xác; Three.js hoặc 3D offline hợp với phối cảnh, che khuất, chất liệu và ánh sáng thật; ảnh có bản quyền, cảnh quay thật và asset sinh ra hợp với nội dung riêng của từng loại. Đừng chủ động hạ chất lượng hình ảnh để nhét vừa các định dạng cấu trúc đợt đầu text/shape/image/chart. Lối vẽ nâng cao có thể đi đường mã nguồn tự do, đồng thời nói rõ ranh giới cam kết chỉnh sửa của nó, sau đó mới xây adapter tương ứng.

Để người dùng thao tác bằng “chiếc xe này”, “đoạn bám theo này”, “cận cảnh dừng thêm một nhịp”; ID đối tượng, tham số camera và ánh xạ thời gian do Agent và công cụ duy trì. Thứ được tham số hóa là quyết định sáng tạo, không chỉ màu và tiêu đề. Sau khi đổi chất liệu, cấu tạo, đường đi camera hay nhịp điệu đều phải xem lại phim thành phẩm thật.

## Nghiệm thu thẩm mỹ và chuyển giao

Người duyệt phim độc lập nhận yêu cầu người dùng, hướng đã chốt, tham chiếu và phim thành phẩm thật; chưa đưa ghi chú sản xuất hay điểm test. Yêu cầu chỉ ra lỗi cụ thể và khung thời gian: cấu trúc/chất liệu có thô không, tiêu điểm có rõ không, nhịp có đều đều mãi hay giật cục mãi không, lần chuyển động máy nào không tăng thêm nhận thức. Frame tĩnh kiểm tra tay nghề, xem liên tục kiểm tra nhịp điệu; hai việc không thay thế nhau.

Đặt mục tiêu “đỉnh cao” nghĩa là tiếp tục lặp đến khi giải quyết xong các vấn đề cụ thể, không có nghĩa được tự chấm điểm cao. Phim thành phẩm mà người dùng đã phủ định rõ ràng không được tiếp tục gọi là chuẩn mực chất lượng; test kỹ thuật vẫn giữ phạm vi chứng minh ban đầu của nó.

Để chuyển cách sửa sang chủ đề lạ, cho một Agent không tham gia viết skill thực sự làm, render, rồi duyệt phim độc lập. Nếu chỉ làm lại thành phố thì chỉ được gọi là cải thiện thành phố; nếu chỉ viết ra phân cảnh thì chỉ được gọi là thử lập kế hoạch. Thí nghiệm đối chứng dùng cùng đề bài, công cụ, tư liệu, ngân sách thời gian và quy cách giao, xem thành phẩm ẩn danh ngẫu nhiên, không để tác giả tự đóng vai baseline hay giám khảo. Một lần thành công là bằng chứng ca, không suy ra mọi người dùng đều làm ra tác phẩm đỉnh cao một cách ổn định.
