import React from "react";
import { useFetchRandomQuoteQuery } from "../../store/apis/randomApi";
import Loader from "../Loader/Loader";
import { QuoteBy, QuoteDiv, QuoteText, QuoteWrapper } from "./QuoteStyle";


function Quote() {
  const { data, error, isLoading } = useFetchRandomQuoteQuery();
  if (isLoading || error) {
    return (
      <QuoteWrapper>
        <QuoteDiv>
          <Loader />
        </QuoteDiv>
      </QuoteWrapper>
    );
  }
  return (
    <QuoteWrapper>
      <QuoteDiv>
        <QuoteText>{data?.content}</QuoteText>
        <QuoteBy>~{data?.author}</QuoteBy>
      </QuoteDiv>
    </QuoteWrapper>
  );
}

export default Quote;
