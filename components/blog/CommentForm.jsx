"use client";

export default function CommentForm() {
  return (
    <div id="respond" className="comment-respond">
      <h3 id="reply-title" className="comment-reply-title margin-bottom-25">
        LEAVE A REPLY
      </h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="commentform"
        className="comment-form"
      >
        <div className="text-wrap clearfix">
          <fieldset className="name-wrap">
            <input
              type="text"
              id="author"
              className="tb-my-input"
              name="author"
              required
              tabIndex={1}
              placeholder="Your Name"
              defaultValue=""
              size={32}
              aria-required="true"
            />
          </fieldset>
          <fieldset className="email-wrap">
            <input
              type="email"
              id="email"
              className="tb-my-input"
              name="email"
              tabIndex={2}
              placeholder="Your E-mail"
              defaultValue=""
              size={32}
              aria-required="true"
            />
          </fieldset>
        </div>
        <fieldset className="message-wrap">
          <textarea
            id="comment-message"
            name="comment"
            rows={8}
            tabIndex={4}
            placeholder="Enter comment here..."
            aria-required="true"
            defaultValue={""}
          />
        </fieldset>
        <p className="form-submit">
          <input
            name="submit"
            type="submit"
            id="comment-reply"
            className="submit"
            readOnly
            value="Post Comment"
          />
          <input
            type="hidden"
            name="comment_post_ID"
            defaultValue={100}
            id="comment_post_ID"
          />
          <input
            type="hidden"
            name="comment_parent"
            id="comment_parent"
            defaultValue={0}
          />
        </p>
      </form>
    </div>
  );
}
