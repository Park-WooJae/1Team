package com.project.jejuair.model.network.response;

import com.project.jejuair.model.enumclass.common.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbPassengerResponse {
    private Long pasIdx;
    private LocalDateTime pasRegDate;
    private String pasFirstname;
    private String pasLastname;
    private String pasBirthDate;
    private String pasSeat;

    private Long tbFlightScheduleSchIdx;

    private Long tbReservationResIdx;

    private Long tbAirlineFoodFoodIdx;
    private String foodKorName;
    private Integer foodKrwPrice;

    private Long tbBaggageBagIdx;
    private Long bagPrice;
    private String bagWeight;
}
