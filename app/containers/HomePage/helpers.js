export const parseElements = elements =>
  elements.map(item => {
    const {
      image: { original_url: originalUrl },
      date_added: dateAdded,
      issue_number: issueNumber,
      api_detail_url: apiDetailUrl,
      name,
    } = item;
    return {
      image: originalUrl,
      date: dateAdded,
      issue: issueNumber,
      url: apiDetailUrl,
      name,
    };
  });
