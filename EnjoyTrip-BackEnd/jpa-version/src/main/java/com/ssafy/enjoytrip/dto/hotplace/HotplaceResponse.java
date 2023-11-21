package com.ssafy.enjoytrip.dto.hotplace;

import com.ssafy.enjoytrip.domain.Hotplace;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HotplaceResponse {

    int hotplaceId;
    String memberId;

    public HotplaceResponse(Hotplace hotplace) {
        this.hotplaceId = hotplace.getId();
        this.memberId = hotplace.getMember().getId();
    }

}
